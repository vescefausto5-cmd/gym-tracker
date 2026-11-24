function parsePdfWorkout(text, fallback="A") {
  let routine=fallback; const rows=[], skipped=[];
  const restPattern=/(?:\s+(?:rec(?:upero)?\.?\s*:?\s*)?)(?:(\d{1,2})\s*(?:min(?:uti)?|['’′])(?:\s*(\d{1,2})\s*(?:s(?:ec(?:ondi)?)?|["”″])?)?|(\d{1,3})\s*(?:s(?:ec(?:ondi)?)?|["”″])|(\d{1,2}):(\d{2}))\s*$/i;
  for(const raw of text.split(/\r?\n/)) {
    let line=raw.trim().replace(/[–—−]/g,"-").replace(/\u00a0/g," ");
    if(!line)continue;
    const header=line.match(/^(?:(?:scheda|giorno|day|full\s*body|allenamento|workout)\s*[:\-]?\s*([ABC])|([ABC])\s*[:\-])(?:\s*[-:·].*|\s*)$/i);
    if(header){routine=(header[1]||header[2]).toUpperCase();continue;}
    line=line.replace(/^(?:[•●▪]\s*|\d{1,2}[.)]\s+)/,"");
    let rest=90, explicitRest=false;
    const rec=line.match(restPattern);
    // A time can also be the target in an exercise such as plank 3x30 sec.
    // Only interpret a trailing time as recovery if another target precedes it.
    if(rec && /(?:\d\s*[x×]\s*\d|\d\s+\d)/i.test(line.slice(0,rec.index))) {
      const seconds=rec[1]?Number(rec[1])*60+Number(rec[2]||0):rec[3]?Number(rec[3]):Number(rec[4])*60+Number(rec[5]);
      if(seconds>=1&&seconds<=600){rest=seconds;explicitRest=true;line=line.slice(0,rec.index).trim();}
    }
    const match=line.match(/^(.+?)\s*[:|;-]?\s+(\d{1,2})\s*(?:[x×*]\s*|\s+)(\d{1,3}(?:\s*[-/]\s*\d{1,3})?(?:\s*(?:sec(?:ondi)?|s|["”″]))?)\s*$/i)
      ||line.match(/^(.+?)\s*[:|;-]?\s+(\d{1,2})\s*[x×*]\s*(\d{1,3}(?:\s*[-/]\s*\d{1,3})?(?:\s*(?:sec(?:ondi)?|s|["”″]))?)\s*$/i);
    if(!match||Number(match[2])<1||Number(match[2])>10){skipped.push(raw.trim());continue;}
    const name=match[1].trim().replace(/[|;:]$/,"").trim();
    if(!name||!/[A-Za-zÀ-ÿ]/.test(name)){skipped.push(raw.trim());continue;}
    rows.push({routine,name,sets:Number(match[2]),reps:match[3].replace(/\s*-\s*/g,"-").trim(),rest,explicitRest});
  }
  return {rows,skipped};
}

function pdfTextLines(items) {
  const lines=[];
  for(const item of items) {
    if(typeof item.str!=="string"||!item.str.trim()||!item.transform)continue;
    const x=item.transform[4],y=item.transform[5];
    if(!Number.isFinite(x)||!Number.isFinite(y))continue;
    let line=lines.find(l=>Math.abs(l.y-y)<=2.5);
    if(!line){line={y,items:[]};lines.push(line);}
    line.items.push({x,text:item.str});
  }
  return lines.sort((a,b)=>b.y-a.y).map(l=>l.items.sort((a,b)=>a.x-b.x).map(i=>i.text).join(" ")).join("\n");
}

function setupPdfImport() {
  const toolsBox=document.querySelector(".routine-tools");
  const existing=document.getElementById("add-exercise-panel");
  if(!toolsBox||!existing)return;
  const toggle=document.createElement("button");
  toggle.type="button";toggle.className="secondary-button accent-outline";toggle.textContent="Importa scheda PDF";
  toggle.setAttribute("aria-expanded","false");
  toolsBox.appendChild(toggle);
  const panel=document.createElement("div");
  panel.className="panel add-exercise-panel hidden";
  panel.id="pdf-import-panel";
  panel.innerHTML=`
    <div class="panel-heading"><div><h3>Importa nuova scheda da PDF</h3><p>Carica un PDF con testo selezionabile. Controlla e correggi i risultati prima di salvare.</p></div><button type="button" id="pdf-close" class="icon-close-button" aria-label="Chiudi">✕</button></div>
    <div class="add-exercise-grid">
      <label class="full-col">Scegli PDF <input id="pdf-file" type="file" accept=".pdf,application/pdf"></label>
      <label>Destinazione predefinita <select id="pdf-default"><option>A</option><option>B</option><option>C</option></select></label>
      <label>Modalità <select id="pdf-mode"><option value="replace">Sostituisci esercizi delle schede selezionate</option><option value="append">Aggiungi agli esercizi esistenti</option></select></label>
      <label class="full-col">Testo estratto (puoi correggerlo o incollarlo a mano)<textarea id="pdf-text" rows="6" style="width:100%;box-sizing:border-box;font:inherit;color:inherit;background:transparent" placeholder="Scheda A&#10;Leg Press 3 x 12 90 sec&#10;Chest Press 3 x 10-12 120 sec"></textarea></label>
    </div>
    <div class="add-exercise-footer"><button type="button" class="secondary-button" id="pdf-parse">Analizza testo</button><button type="button" class="secondary-button" id="pdf-add">+ Riga manuale</button></div>
    <p id="pdf-status" role="status" aria-live="polite"></p>
    <p>Verifica ogni riga: il recupero non rilevato viene impostato a 90 secondi. La scelta della scheda è modificabile per ogni esercizio.</p>
    <div id="pdf-rows"></div>
    <details id="pdf-skipped-box" class="hidden"><summary>Righe non interpretate (da controllare)</summary><pre id="pdf-skipped" style="white-space:pre-wrap;overflow-wrap:anywhere"></pre></details>
    <div class="add-exercise-footer"><button type="button" class="secondary-button" id="pdf-backup">Esporta backup prima di importare</button><button type="button" class="primary-button" id="pdf-save" disabled>Conferma importazione</button></div>
    <p>La lettura PDF richiede connessione per caricare la libreria PDF.js. Le scansioni senza testo non sono riconosciute; puoi incollare il testo manualmente. Il file è elaborato nel browser.</p>`;
  existing.after(panel);
  const q=id=>panel.querySelector("#"+id);
  const rowsBox=q("pdf-rows"),status=q("pdf-status"),save=q("pdf-save"),source=q("pdf-text");
  let busy=false, generation=0, parsedSource=null;
  const updateSave=()=>{save.disabled=busy||!rowsBox.children.length||parsedSource!==source.value;};
  function addRow(data) {
    const row=document.createElement("div");row.className="panel";
    row.innerHTML=`<div class="add-exercise-grid">
      <label>Scheda <select data-field="routine"><option>A</option><option>B</option><option>C</option></select></label>
      <label class="full-col">Esercizio <input type="text" maxlength="150" data-field="name" list="exercise-catalog-list"></label>
      <label>Serie <input type="number" min="1" max="10" data-field="sets"></label>
      <label>Ripetizioni target <input type="text" maxlength="40" data-field="reps"></label>
      <label>Recupero (secondi) <input type="number" min="1" max="600" data-field="rest"></label>
    </div><p data-match></p><button class="secondary-button" type="button" data-remove>Rimuovi riga</button>`;
    for(const field of ["routine","name","sets","reps","rest"]) row.querySelector('[data-field="'+field+'"]').value=data[field];
    const name=row.querySelector('[data-field="name"]');
    const updateMatch=()=>{
      const match=ExerciseKnowledgeBase.find(name.value.trim());
      row.querySelector("[data-match]").textContent=match?.matchedName?"Guida riconosciuta: "+match.matchedName:"Nessuna guida verificata associata";
    };
    name.addEventListener("input",updateMatch);updateMatch();
    row.querySelector("[data-remove]").addEventListener("click",()=>{row.remove();updateSave();});
    rowsBox.appendChild(row);updateSave();
  }
  function analyze(){
    const result=parsePdfWorkout(source.value,q("pdf-default").value);
    parsedSource=source.value;rowsBox.replaceChildren();
    result.rows.forEach(addRow);
    q("pdf-skipped").textContent=result.skipped.join("\n");
    q("pdf-skipped-box").classList.toggle("hidden",!result.skipped.length);
    q("pdf-skipped-box").open=!!result.skipped.length;
    status.textContent=result.rows.length+" esercizi rilevati; "+result.skipped.length+" righe non interpretate. Verifica l'anteprima.";
    updateSave();
  }
  function confirmDiscardPreview(){
    return !rowsBox.children.length||confirm("Sostituire l'anteprima attuale? Le modifiche non ancora salvate saranno perse.");
  }
  toggle.addEventListener("click",()=>{
    const opening=panel.classList.contains("hidden");
    panel.classList.toggle("hidden",!opening);toggle.setAttribute("aria-expanded",String(opening));
    if(opening&&!rowsBox.children.length)q("pdf-default").value=currentRoutine;
  });
  q("pdf-close").addEventListener("click",()=>{panel.classList.add("hidden");toggle.setAttribute("aria-expanded","false");});
  source.addEventListener("input",()=>{status.textContent="Testo modificato: premi Analizza testo prima di confermare.";updateSave();});
  q("pdf-parse").addEventListener("click",()=>{if(!busy&&confirmDiscardPreview())analyze();});
  q("pdf-add").addEventListener("click",()=>{
    if(busy)return;
    if(parsedSource!==source.value&&source.value.trim()){status.textContent="Analizza prima il testo modificato.";return;}
    parsedSource=source.value;
    addRow({routine:q("pdf-default").value,name:"",sets:3,reps:"10-12",rest:90});
  });
  q("pdf-backup").addEventListener("click",exportGymBackup);
  q("pdf-file").addEventListener("change",async e=>{
    const file=e.target.files?.[0];e.target.value="";
    if(!file||!confirmDiscardPreview())return;
    if(file.size>20*1024*1024){status.textContent="PDF troppo grande (limite 20 MB).";return;}
    const token=++generation;busy=true;updateSave();status.textContent="Lettura PDF in corso…";
    let task;
    try{
      const base="https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.624/legacy/build/";
      const pdfjs=await import(base+"pdf.min.mjs");
      pdfjs.GlobalWorkerOptions.workerSrc=base+"pdf.worker.min.mjs";
      task=pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer()),isEvalSupported:false,disableFontFace:true,useSystemFonts:false});
      const pdf=await task.promise;
      if(pdf.numPages>50)throw new Error("PDF troppo lungo (limite 50 pagine).");
      const parts=[];
      for(let i=1;i<=pdf.numPages;i++){
        if(token!==generation)return;
        const page=await pdf.getPage(i);
        const content=await page.getTextContent();
        parts.push(pdfTextLines(content.items));
        page.cleanup();
      }
      if(token!==generation)return;
      source.value=parts.join("\n").trim();
      analyze();
      if(!source.value)status.textContent="Nessun testo rilevato. Il PDF potrebbe essere una scansione: incolla il testo o aggiungi righe a mano.";
    }catch(err){
      if(token===generation)status.textContent="Impossibile leggere il PDF. Controlla connessione, compatibilità del browser e protezione del file. "+(err?.message||"");
    }finally{
      if(task)try{await task.destroy();}catch{}
      if(token===generation){busy=false;updateSave();}
    }
  });
  save.addEventListener("click",()=>{
    if(busy||parsedSource!==source.value)return;
    const grouped={};
    for(const row of rowsBox.children){
      const field=k=>row.querySelector('[data-field="'+k+'"]').value.trim();
      const routine=field("routine"),name=field("name"),sets=Number(field("sets")),reps=field("reps"),restSeconds=Number(field("rest"));
      if(!["A","B","C"].includes(routine)||!name||name.length>150||/[<>&]/.test(name)||!reps||reps.length>40||/[<>&]/.test(reps)||!Number.isInteger(sets)||sets<1||sets>10||!Number.isInteger(restSeconds)||restSeconds<1||restSeconds>600){
        status.textContent="Controlla nome, serie (1–10), ripetizioni e recupero (1–600 secondi). I simboli <, > e & non sono ammessi.";return;
      }
      const match=ExerciseKnowledgeBase.find(name);
      (grouped[routine]??=[]).push({name,muscles:match?.muscles||"Esercizio non riconosciuto",sets,reps,restSeconds});
    }
    const keys=Object.keys(grouped);if(!keys.length)return;
    const affectsCurrent=keys.includes(currentRoutine);
    if(affectsCurrent&&(restEndTime||currentWorkout.some(ex=>ex.sets.some(s=>s.completed||String(s.reps)!==""||(String(s.kg)!==""&&String(s.kg)!==String(getLastSet(ex.name)?.kg??"")))))){
      status.textContent="Termina o azzera volontariamente l'allenamento in corso prima di modificare questa scheda.";return;
    }
    const append=q("pdf-mode").value==="append";
    const routines={...gymData.routines};
    for(const key of keys)routines[key]=append?[...getRoutineExercises(key),...grouped[key]]:grouped[key];
    const counts=keys.map(k=>"Scheda "+k+": "+grouped[k].length+" esercizi").join("\n");
    if(!confirm((append?"Aggiungere gli esercizi?":"Sostituire gli esercizi delle schede indicate?")+"\n"+counts+"\nLo storico non verrà modificato."))return;
    const next={...gymData,routines};
    try{localStorage.setItem(GymDB.key,JSON.stringify(next));}catch{status.textContent="Salvataggio non riuscito: nessun dato modificato. Libera spazio e riprova.";return;}
    gymData=next;
    if(affectsCurrent){stopRestTimer();renderRoutine(currentRoutine);}
    rowsBox.replaceChildren();source.value="";parsedSource=null;q("pdf-skipped-box").classList.add("hidden");
    status.textContent="Importazione salvata. "+counts.replace(/\n/g," · ")+" · Storico invariato.";
    updateSave();
  });
}

document.addEventListener('DOMContentLoaded', setupPdfImport);
