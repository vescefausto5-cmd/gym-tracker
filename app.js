/* =====================================
   GYM TRACKER - APP PRINCIPALE
   Versione 3.1 - Smart Exercise DB + iOS Lock-Safe
===================================== */

const ExerciseKnowledgeBase = {
    catalog: {
        "Leg Press": {
            muscles: "Quadricipiti e glutei",
            keywords: ["leg press", "pressa", "pressa gambe"],
            image: "./assets/exercises/leg-press.jpg",
            execution: "Posiziona i piedi in modo stabile sulla pedana, in genere circa alla larghezza delle spalle. Sblocca il carrello e scendi solo fin dove riesci a mantenere bacino e schiena appoggiati allo schienale, senza dolore né cedimenti. Spingi attraverso tutto il piede e termina senza forzare il blocco delle ginocchia. La profondità dipende dalla macchina e dalla tua mobilità.",
            mistakes: [
                "Sollevare i glutei o la zona lombare a fine discesa",
                "Far collassare le ginocchia verso l'interno durante la spinta",
                "Iperestendere le ginocchia a fine ripetizione"
            ],
            tip: "Mantieni il tallone ben appoggiato alla pedana e frena la discesa per 2 secondi."
        },
        "Chest Press": {
            muscles: "Pettorali e tricipiti",
            keywords: ["chest press", "spinte petto", "macchina petto"],
            image: "./assets/exercises/chest-press.jpg",
            execution: "Regola il sedile in modo che le maniglie siano all'altezza del centro del petto. Addurre le scapole contro lo schienale, spingi in avanti espirando e torna indietro fino a sentire un leggero allungamento sui pettorali.",
            mistakes: [
                "Alzare le spalle verso le orecchie durante la spinta",
                "Staccare le scapole dallo schienale in chiusura",
                "Aprire i gomiti a 90° rispetto al busto"
            ],
            tip: "Scegli una traiettoria confortevole per spalle e gomiti, rispettando la geometria della macchina; evita di forzare un angolo fisso."
        },
        "Chest Press inclinata": {
            muscles: "Pettorali superiori e tricipiti",
            keywords: ["chest press inclinata", "incline press", "petto alto"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Regola sedile e schienale secondo la traiettoria prevista dalla macchina, con impugnature in posizione confortevole rispetto alla parte alta del petto. Mantieni il tronco stabile, spingi senza forzare il blocco dei gomiti e torna lentamente, evitando dolore alle spalle.",
            mistakes: [
                "Perdere l'assetto delle scapole a fine spinta",
                "Rimbalzare nella parte bassa del movimento"
            ],
            tip: "Mantieni il petto alto per tutta la durata della serie."
        },
        "Panca piana": {
            muscles: "Pettorali, deltoidi anteriori e tricipiti",
            keywords: ["panca piana", "bench press", "panca bilanciere", "panca piana bilanciere"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Sdraiati con piedi stabili, glutei sulla panca e scapole stabilizzate. Usa un'impugnatura che mantenga polsi e avambracci allineati. Abbassa il bilanciere in modo controllato verso una zona confortevole del petto, senza rimbalzi, poi spingi mantenendo il controllo. Per carichi impegnativi usa supporti di sicurezza o uno spotter competente.",
            mistakes: [
                "Aprire i gomiti a 90° mettendo stress sulle spalle",
                "Sollevare i glutei dalla panca durante la spinta",
                "Far rimbalzare il bilanciere sul petto"
            ],
            tip: "Immagina di spezzare il bilanciere con le mani per attivare i dorsali e stabilizzare le spalle."
        },
        "Croci ai cavi / Pectoral": {
            muscles: "Pettorali (isolamento)",
            keywords: ["croci ai cavi", "pectoral", "pec deck", "cable fly"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Mantieni i gomiti leggermente flessi con un angolo stabile durante tutta la ripetizione. Apri le braccia in modo controllato entro un'ampiezza confortevole, senza forzare le spalle indietro, poi richiudi davanti al petto.",
            mistakes: [
                "Piegare e stendere i gomiti trasformandolo in una spinta",
                "Portare le braccia troppo indietro forzando la capsula della spalla"
            ],
            tip: "Concentrati sull'avvicinare i gomiti tra loro, non solo le mani."
        },
        "Lat Machine": {
            muscles: "Dorsali e bicipiti",
            keywords: ["lat machine", "lat pulldown", "pulldown alla lat machine"],
            image: "./assets/exercises/lat-machine.jpg",
            execution: "Afferra la barra poco oltre la larghezza delle spalle. Blocca le cosce sotto i cuscinetti, deprimi le scapole e tira la barra verso la parte alta del petto inclinando leggermente il busto indietro.",
            mistakes: [
                "Slanciarsi indietro usando l'inerzia della schiena",
                "Portare i gomiti indietro invece che verso il basso",
                "Tirare la barra dietro la nuca"
            ],
            tip: "Pensa a spingere i gomiti verso i fianchi, non a tirare con le mani."
        },
        "Lat Machine presa neutra": {
            muscles: "Dorsali e bicipiti",
            keywords: ["lat machine presa neutra", "lat triangolo", "presa parallela"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Usa un'impugnatura neutra con i palmi rivolti uno verso l'altro. Tieni le cosce sotto i fermi e porta l'impugnatura verso la parte anteriore alta del torace, secondo la geometria dell'attrezzo, mantenendo il busto stabile e i gomiti orientati verso il basso.",
            mistakes: [
                "Tirare solo con i bicipiti arrotondando le spalle",
                "Dondolare eccessivamente con il tronco"
            ],
            tip: "Mantieni una presa comoda e non inclinare eccessivamente il busto per raggiungere il torace con l'impugnatura."
        },
        "Leg Curl": {
            muscles: "Femorali",
            keywords: ["leg curl", "hamstring curl"],
            image: "./assets/exercises/leg-curl.jpg",
            execution: "Allinea l'asse di rotazione della macchina con il ginocchio e posiziona il rullo appena sopra i talloni. Fletti le gambe portando i talloni verso i glutei e controlla il ritorno.",
            mistakes: [
                "Sollevare il bacino dal cuscino durante la contrazione",
                "Lasciare cadere il peso nella fase di ritorno"
            ],
            tip: "Mantieni caviglie e piedi in una posizione comoda e stabile, senza forzare la dorsiflessione."
        },
        "Stacco rumeno con manubri": {
            muscles: "Femorali e glutei",
            keywords: ["stacco rumeno", "stacco rumeno con manubri", "rdl manubri", "romanian deadlift dumbbells"],
            image: "./assets/exercises/rdl-dumbbells.jpg",
            execution: "In piedi con i manubri davanti alle cosce e ginocchia leggermente flesse, spingi il bacino indietro mantenendo la colonna in posizione neutra. Scendi fin dove riesci a mantenere questa posizione e senti lavorare la parte posteriore delle cosce; non è necessario raggiungere una quota fissa. Risali riportando il bacino in avanti senza inarcare la schiena.",
            mistakes: [
                "Curvare la zona lombare in discesa",
                "Piegare eccessivamente le ginocchia trasformandolo in uno squat"
            ],
            tip: "Fermati appena senti che il bacino non arretra più e i femorali sono in massima tensione."
        },
        "Machine Row": {
            muscles: "Dorsali e parte centrale della schiena",
            keywords: ["machine row", "rematore macchina"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Appoggia bene il petto al supporto, afferra le maniglie e tira i gomiti indietro avvicinando le scapole tra loro. Mantieni il busto fermo.",
            mistakes: [
                "Staccare il petto dal cuscino per aiutarsi con la schiena",
                "Arrotondare le spalle in avanti in fase di chiusura"
            ],
            tip: "Fai una pausa di mezzo secondo quando le maniglie arrivano al busto."
        },
        "Low Row": {
            muscles: "Dorsali e romboidi",
            keywords: ["low row", "rematore basso"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Siediti con la schiena dritta, afferra la maniglia bassa e tira verso l'ombelico mantenendo i gomiti vicini al corpo e le spalle basse.",
            mistakes: [
                "Inclinarsi eccessivamente in avanti e indietro",
                "Chiudere le spalle in avanti a fine tirata"
            ],
            tip: "Apri il petto mentre tiri la maniglia verso l'addome."
        },
        "Cable Row": {
            muscles: "Dorsali e schiena",
            keywords: ["cable row", "pulley", "rematore al cavo", "rematore cavo"],
            image: "./assets/exercises/cable-row.jpg",
            execution: "Seduto al pulley basso con ginocchia leggermente flesse, mantieni la colonna neutra e porta la maniglia verso l'addome avvicinando le scapole.",
            mistakes: [
                "Incurvare la schiena in avanti per allungare troppo",
                "Slanciarsi indietro oltre la verticale"
            ],
            tip: "Il busto rimane fermo come una statua: si muovono solo braccia e scapole."
        },
        "Alzate laterali": {
            muscles: "Deltoide laterale",
            keywords: ["alzate laterali", "lateral raise", "spalle laterali"],
            image: "./assets/exercises/lateral-raise.jpg",
            execution: "In piedi con manubri leggeri e gomiti leggermente flessi, solleva le braccia lateralmente nel piano più confortevole per le spalle. Fermati all'altezza che controlli senza dolore o compensi del busto.",
            mistakes: [
                "Dondolare con il busto per slanciare i manubri",
                "Alzare le spalle verso le orecchie o forzare un'ampiezza dolorosa"
            ],
            tip: "Immagina di allontanare i manubri dalle pareti invece di sollevarli verso l'alto."
        },
        "Shoulder Press": {
            muscles: "Spalle e tricipiti",
            keywords: ["shoulder press", "shoulder press macchina", "spinte spalle macchina"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Regola il sedile della shoulder press in modo che le impugnature siano raggiungibili senza forzare le spalle. Mantieni tronco e bacino stabili, spingi lungo la traiettoria della macchina e ritorna lentamente entro un'ampiezza confortevole.",
            mistakes: [
                "Inarcare la schiena staccandola dallo schienale",
                "Portare i gomiti troppo indietro rispetto al piano delle scapole"
            ],
            tip: "Tieni i gomiti leggermente davanti al busto."
        },
        "Hip Thrust": {
            muscles: "Glutei",
            keywords: ["hip thrust", "hip thrust con panca"],
            image: "./assets/exercises/hip-thrust.jpg",
            execution: "Appoggia la parte bassa delle scapole su una panca, piedi alla larghezza delle spalle. Spingi sui talloni sollevando il bacino fino a allineare cosce e busto, mantenendo il mento leggermente verso lo sterno.",
            mistakes: [
                "Iperestendere la schiena in cima al movimento",
                "Spingere sulle punte dei piedi anziché sui talloni"
            ],
            tip: "Mantieni il collo comodo e in linea con il busto; evita di iperestendere la zona lombare in chiusura."
        },
        "Hack Squat / Leg Press": {
            muscles: "Quadricipiti e glutei",
            keywords: ["hack squat", "hack squat machine"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Sulla macchina hack squat, appoggia schiena e spalle ai supporti e posiziona i piedi stabilmente sulla pedana. Scendi solo fin dove riesci a mantenere talloni appoggiati e bacino controllato, senza dolore. Risali spingendo con tutto il piede, senza bloccare forzatamente le ginocchia.",
            mistakes: [
                "Alzare i talloni dalla pedana",
                "Staccare la zona lombare dallo schienale in buca"
            ],
            tip: "Mantieni il peso distribuito su tutto il piede (tripode: tallone, alluce, mignolo)."
        },
        "Leg Extension": {
            muscles: "Quadricipiti",
            keywords: ["leg extension", "estensioni gambe"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Regola la macchina in modo che il perno sia allineato con l'articolazione del ginocchio e il rullo appoggi sulla parte bassa della tibia, sopra la caviglia. Estendi le ginocchia in modo controllato entro un'ampiezza confortevole, senza scatti né blocco forzato, poi ritorna lentamente.",
            mistakes: [
                "Dare uno strattone iniziale con i fianchi",
                "Scendere troppo velocemente"
            ],
            tip: "Controlla soprattutto i primi gradi di discesa."
        },
        "Curl bicipiti": {
            muscles: "Bicipiti",
            keywords: ["curl bicipiti", "curl bilanciere", "curl manubri"],
            image: "./assets/exercises/bicep-curl.jpg",
            execution: "In piedi con manubri o bilanciere, gomiti fermi lungo i fianchi. Fletti l'avambraccio portando il carico verso le spalle senza muovere i gomiti in avanti.",
            mistakes: [
                "Usare la schiena per slanciare il peso",
                "Portare i gomiti in avanti a fine ripetizione"
            ],
            tip: "Strizza il bicipite in alto per un secondo e scendi in 2-3 secondi."
        },
        "Pushdown tricipiti": {
            muscles: "Tricipiti",
            keywords: ["pushdown", "tricipiti al cavo", "estensioni tricipiti al cavo"],
            image: "./assets/exercises/tricep-pushdown.jpg",
            execution: "Al cavo alto, mantieni i gomiti vicini ai fianchi e relativamente fermi. Spingi la barra o la corda verso il basso estendendo i gomiti in modo controllato, senza forzare il blocco articolare; ritorna lentamente finché l'avambraccio è nuovamente flesso in modo confortevole.",
            mistakes: [
                "Allargare i gomiti o portarli avanti e indietro",
                "Appoggiarsi con il peso del corpo sopra la maniglia"
            ],
            tip: "Tieni le spalle basse e i polsi dritti."
        },
        "Pallof Press": {
            muscles: "Addome e core",
            keywords: ["pallof", "pallof press", "anti-rotazione al cavo"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Posizionati lateralmente rispetto al cavo regolato all'altezza dello sterno. Afferra la maniglia con entrambe le mani al centro del petto, distendi completamente le braccia in avanti resistendo alla rotazione del busto e ritorna.",
            mistakes: [
                "Lasciare che il cavo ruoti il tronco o le spalle",
                "Inarcare la zona lombare"
            ],
            tip: "Contrai glutei e addome prima ancora di distendere le braccia."
        },
        "Dead Bug": {
            muscles: "Addome e core",
            keywords: ["dead bug"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Sdraiati supino con braccia rivolte verso il soffitto e anche e ginocchia flesse. Mantieni il tronco stabile e abbassa lentamente un braccio e la gamba opposta solo fin dove riesci a controllare il bacino e la posizione lombare senza dolore. Ritorna e alterna i lati; riduci l'ampiezza se perdi il controllo.",
            mistakes: [
                "Perdere il controllo della posizione lombare durante l'allungamento",
                "Eseguire il movimento troppo velocemente"
            ],
            tip: "Espira lentamente mentre allunghi braccio e gamba."
        },
        "Plank rialzato": {
            muscles: "Addome e core",
            keywords: ["plank rialzato", "incline plank", "plank su panca"],
            image: null, // Immagine da verificare prima della pubblicazione
            execution: "Appoggia gli avambracci o le mani su una panca stabile, corpo in linea dalla testa ai talloni. Contrai forte glutei e addome mantenendo la respirazione regolare.",
            mistakes: [
                "Lasciar cadere il bacino verso il basso",
                "Alzare troppo i glutei"
            ],
            tip: "Immagina di voler avvicinare gomiti e punte dei piedi senza muoverli."
        }
    },

    find(exerciseName) {
        if (!exerciseName || typeof exerciseName !== "string") return null;
        const normalize = value => value
            .toLocaleLowerCase("it")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, " ")
            .trim()
            .replace(/\s+/g, " ");
        const clean = normalize(exerciseName);

        // Mostra una guida solo se il nome completo coincide con un esercizio
        // o con un alias esplicito. Evita abbinamenti parziali fuorvianti.
        for (const [key, data] of Object.entries(this.catalog)) {
            const candidates = [key, ...(data.keywords || [])].map(normalize);
            if (candidates.includes(clean)) {
                return { matchedName: key, exact: key === exerciseName.trim(), ...data };
            }
        }

        return {
            matchedName: null,
            exact: false,
            muscles: "Esercizio non riconosciuto",
            image: null,
            execution: "Non è ancora disponibile una guida verificata per questo esercizio. Controlla il nome esatto e chiedi a un istruttore qualificato di mostrarti il movimento prima di eseguirlo.",
            mistakes: [],
            tip: "Non usare le istruzioni di un esercizio simile come sostituto della tecnica specifica."
        };
    }
};

const GymDB = {
    key: "gymTrackerData",
    draftKey: "gymTrackerActiveDraft",

    initialData: {
        profile: { weight: 117, height: 181, age: 25 },
        workouts: [],
        bodyWeight: [],
        cardio: [],
        routines: { A: null, B: null, C: null }
    },

    getData() {
        try {
            const saved = localStorage.getItem(this.key);
            if (!saved) return JSON.parse(JSON.stringify(this.initialData));
            const data = JSON.parse(saved);
            return {
                ...JSON.parse(JSON.stringify(this.initialData)),
                ...data,
                profile: { ...this.initialData.profile, ...(data.profile || {}) },
                workouts: Array.isArray(data.workouts) ? data.workouts : [],
                bodyWeight: Array.isArray(data.bodyWeight) ? data.bodyWeight : [],
                cardio: Array.isArray(data.cardio) ? data.cardio : [],
                routines: { ...this.initialData.routines, ...(data.routines || {}) }
            };
        } catch {
            return JSON.parse(JSON.stringify(this.initialData));
        }
    },

    saveData(data) {
        try { localStorage.setItem(this.key, JSON.stringify(data)); } catch {}
    },

    getDraft() {
        try {
            const draft = localStorage.getItem(this.draftKey);
            return draft ? JSON.parse(draft) : null;
        } catch { return null; }
    },

    saveDraft(draft) {
        try { localStorage.setItem(this.draftKey, JSON.stringify(draft)); } catch {}
    },

    clearDraft() {
        try { localStorage.removeItem(this.draftKey); } catch {}
    }
};

let gymData = GymDB.getData();

function saveGymData() { GymDB.saveData(gymData); }
function saveWorkout(workout) { gymData.workouts.push(workout); saveGymData(); }
function saveBodyWeight(entry) { gymData.bodyWeight.push(entry); gymData.profile.weight = entry.weight; saveGymData(); }
function saveCardio(entry) { gymData.cardio.push(entry); saveGymData(); }

const ThemeManager = {
    key: "gymTrackerTheme",
    colors: { green: "#16a34a", red: "#dc3545", purple: "#8b5cf6", blue: "#2563eb" },

    init() {
        const savedTheme = localStorage.getItem(this.key) || "green";
        this.set(savedTheme);
        document.querySelectorAll(".theme-choice").forEach(button => {
            button.addEventListener("click", () => this.set(button.dataset.theme));
        });
    },

    set(theme) {
        if (!this.colors[theme]) theme = "green";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem(this.key, theme);
        const metaTheme = document.getElementById("meta-theme-color");
        if (metaTheme) metaTheme.setAttribute("content", this.colors[theme]);
        document.querySelectorAll(".theme-choice").forEach(button => {
            button.classList.toggle("active", button.dataset.theme === theme);
        });
        updateCharts();
    }
};

const defaultRoutines = {
    A: {
        name: "Full Body A",
        description: "Allenamento completo A · Spinta, tirata e catena anteriore",
        tip: "Concentrati sul controllo della fase negativa (2 secondi in discesa) e mantieni 90 secondi di recupero tra le serie.",
        exercises: [
            { name: "Leg Press", muscles: "Quadricipiti e glutei", sets: 3, reps: "10-12" },
            { name: "Chest Press", muscles: "Pettorali e tricipiti", sets: 3, reps: "10-12" },
            { name: "Lat Machine", muscles: "Dorsali e bicipiti", sets: 3, reps: "10-12" },
            { name: "Leg Curl", muscles: "Femorali", sets: 2, reps: "12-15" },
            { name: "Machine Row", muscles: "Dorsali e parte centrale della schiena", sets: 2, reps: "10-12" },
            { name: "Alzate laterali", muscles: "Deltoide laterale", sets: 2, reps: "12-15" },
            { name: "Pallof Press", muscles: "Addome e core", sets: 2, reps: "12" }
        ]
    },
    B: {
        name: "Full Body B",
        description: "Allenamento completo B · Catena posteriore e spinta verticale",
        tip: "Nello stacco rumeno privilegia sempre la schiena neutra rispetto al carico sul manubrio.",
        exercises: [
            { name: "Stacco rumeno con manubri", muscles: "Femorali e glutei", sets: 3, reps: "10" },
            { name: "Chest Press inclinata", muscles: "Pettorali superiori e tricipiti", sets: 3, reps: "10-12" },
            { name: "Low Row", muscles: "Dorsali e romboidi", sets: 3, reps: "10-12" },
            { name: "Leg Extension", muscles: "Quadricipiti", sets: 2, reps: "12-15" },
            { name: "Shoulder Press", muscles: "Spalle e tricipiti", sets: 2, reps: "10-12" },
            { name: "Hip Thrust", muscles: "Glutei", sets: 2, reps: "12" },
            { name: "Dead Bug", muscles: "Addome e core", sets: 2, reps: "10" }
        ]
    },
    C: {
        name: "Full Body C",
        description: "Allenamento completo C · Richiamo globale e braccia",
        tip: "Mantieni il busto stabile negli esercizi ai cavi evitando slanci.",
        exercises: [
            { name: "Hack Squat / Leg Press", muscles: "Quadricipiti e glutei", sets: 3, reps: "10-12" },
            { name: "Chest Press", muscles: "Pettorali e tricipiti", sets: 2, reps: "12" },
            { name: "Lat Machine presa neutra", muscles: "Dorsali e bicipiti", sets: 3, reps: "10-12" },
            { name: "Leg Curl", muscles: "Femorali", sets: 3, reps: "12" },
            { name: "Cable Row", muscles: "Dorsali e schiena", sets: 2, reps: "12" },
            { name: "Curl bicipiti", muscles: "Bicipiti", sets: 2, reps: "12" },
            { name: "Pushdown tricipiti", muscles: "Tricipiti", sets: 2, reps: "12" },
            { name: "Plank rialzato", muscles: "Addome e core", sets: 2, reps: "20-30 sec" }
        ]
    }
};

function getRoutineExercises(routineKey) {
    const custom = gymData.routines?.[routineKey];
    if (Array.isArray(custom) && custom.length > 0) return custom;
    return defaultRoutines[routineKey].exercises;
}

let currentRoutine = "A";
let currentWorkout = [];
let restInterval = null;
let restEndTime = null;
let wakeLockSentinel = null;
const DEFAULT_REST_SECONDS = 90;

function persistActiveDraft() {
    GymDB.saveDraft({ routine: currentRoutine, workout: currentWorkout, restEndTime, updatedAt: Date.now() });
}

async function requestScreenWakeLock() {
    if (!("wakeLock" in navigator) || wakeLockSentinel) return;
    try {
        wakeLockSentinel = await navigator.wakeLock.request("screen");
        wakeLockSentinel.addEventListener("release", () => { wakeLockSentinel = null; });
    } catch {}
}

function releaseScreenWakeLock() {
    if (wakeLockSentinel) {
        wakeLockSentinel.release().catch(() => {});
        wakeLockSentinel = null;
    }
}

function getLastSet(exerciseName) {
    for (let i = gymData.workouts.length - 1; i >= 0; i--) {
        const workout = gymData.workouts[i];
        const exercise = workout.exercises?.find(item => item.name === exerciseName);
        if (exercise && Array.isArray(exercise.sets)) {
            const completedSet = [...exercise.sets].reverse().find(set => set.completed);
            if (completedSet) return completedSet;
        }
    }
    return null;
}

function renderRoutine(routineKey, restoredWorkout = null, restoredRestEnd = null) {
    if (!defaultRoutines[routineKey]) return;
    currentRoutine = routineKey;
    const baseRoutine = defaultRoutines[routineKey];
    const exercisesList = getRoutineExercises(routineKey);

    if (restoredWorkout && Array.isArray(restoredWorkout)) {
        currentWorkout = restoredWorkout;
    } else {
        currentWorkout = exercisesList.map(exercise => {
            const lastSet = getLastSet(exercise.name);
            return {
                name: exercise.name,
                muscles: exercise.muscles,
                targetReps: exercise.reps,
                sets: Array.from({ length: exercise.sets }, () => ({
                    kg: lastSet ? lastSet.kg : "",
                    reps: "",
                    completed: false
                }))
            };
        });
        restEndTime = null;
        persistActiveDraft();
    }

    document.querySelectorAll(".routine-button").forEach(button => {
        button.classList.toggle("active", button.dataset.routine === routineKey);
    });

    const summary = document.getElementById("routine-summary");
    if (summary) {
        summary.innerHTML = `
            <h3>${baseRoutine.name}</h3>
            <p>${baseRoutine.description}</p>
            <p>${currentWorkout.length} esercizi programmati</p>
        `;
    }

    const tipsContainer = document.getElementById("workout-tips");
    if (tipsContainer) {
        tipsContainer.innerHTML = baseRoutine.tip
            ? `<div class="workout-tip-banner"><strong>Nota tecnica:</strong> ${baseRoutine.tip}</div>`
            : "";
    }

    renderExercises();

    if (restoredRestEnd && restoredRestEnd > Date.now()) {
        resumeRestTimerFromEndTime(restoredRestEnd);
    }
}

function createExerciseGuideElement(exerciseName) {
    const guide = ExerciseKnowledgeBase.find(exerciseName);
    if (!guide) return null;

    const details = document.createElement("details");
    details.className = "exercise-guide";

    const summary = document.createElement("summary");
    summary.textContent = guide.matchedName && !guide.exact
        ? `Guida tecnica (riferimento: ${guide.matchedName})`
        : guide.image ? "Guida esecuzione, immagine e consigli" : "Guida esecuzione e consigli";
    details.appendChild(summary);

    if (guide.image) {
        const img = document.createElement("img");
        img.src = guide.image;
        img.alt = `Illustrazione ${exerciseName}`;
        img.className = "exercise-guide-image";
        img.loading = "lazy";
        img.onerror = () => img.remove();
        details.appendChild(img);
    }

    const content = document.createElement("div");
    content.className = "guide-content";

    const execSection = document.createElement("div");
    execSection.className = "guide-section";
    execSection.innerHTML = `<strong>Esecuzione corretta</strong><p>${guide.execution}</p>`;
    content.appendChild(execSection);

    if (Array.isArray(guide.mistakes) && guide.mistakes.length > 0) {
        const mistakesSection = document.createElement("div");
        mistakesSection.className = "guide-section";
        const items = guide.mistakes.map(m => `<li>${m}</li>`).join("");
        mistakesSection.innerHTML = `<strong>Errori comuni da evitare</strong><ul>${items}</ul>`;
        content.appendChild(mistakesSection);
    }

    if (guide.tip) {
        const tipBox = document.createElement("div");
        tipBox.className = "training-tip";
        tipBox.innerHTML = `<strong>Consiglio pratico</strong><p>${guide.tip}</p>`;
        content.appendChild(tipBox);
    }

    details.appendChild(content);
    return details;
}

function removeExerciseFromCurrentRoutine(exerciseIndex) {
    const exercise = currentWorkout[exerciseIndex];
    if (!exercise) return;
    if (!confirm(`Rimuovere "${exercise.name}" dalla Scheda ${currentRoutine}?`)) return;

    currentWorkout.splice(exerciseIndex, 1);
    gymData.routines[currentRoutine] = currentWorkout.map(ex => ({
        name: ex.name, muscles: ex.muscles, sets: ex.sets.length, reps: ex.targetReps || "10-12"
    }));
    saveGymData();
    persistActiveDraft();
    renderRoutine(currentRoutine, currentWorkout);
}

function renderExercises() {
    const container = document.getElementById("exercise-list");
    if (!container) return;
    container.innerHTML = "";

    currentWorkout.forEach((exercise, exerciseIndex) => {
        const lastSet = getLastSet(exercise.name);
        const card = document.createElement("div");
        card.className = "exercise-card";

        const header = document.createElement("div");
        header.className = "exercise-header";

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.muscles}${exercise.targetReps ? ` · Target: ${exercise.targetReps} rip.` : ""}</p>
            <p class="last-load">Ultimo carico: ${lastSet ? `${lastSet.kg} kg × ${lastSet.reps}` : "Nessun dato precedente"}</p>
        `;

        const actionsDiv = document.createElement("div");
        actionsDiv.className = "exercise-header-actions";

        const tag = document.createElement("span");
        tag.className = "exercise-tag";
        tag.textContent = `${exercise.sets.length} serie`;

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "remove-exercise-btn";
        removeBtn.title = "Rimuovi esercizio";
        removeBtn.textContent = "✕";
        removeBtn.addEventListener("click", () => removeExerciseFromCurrentRoutine(exerciseIndex));

        actionsDiv.append(tag, removeBtn);
        header.append(infoDiv, actionsDiv);
        card.appendChild(header);

        const guideElement = createExerciseGuideElement(exercise.name);
        if (guideElement) card.appendChild(guideElement);

        exercise.sets.forEach((set, setIndex) => {
            const row = document.createElement("div");
            row.className = "set-row";
            if (set.completed) row.classList.add("completed");

            const number = document.createElement("span");
            number.className = "set-number";
            number.textContent = `S${setIndex + 1}`;

            const kg = document.createElement("input");
            kg.type = "number";
            kg.inputMode = "decimal";
            kg.min = "0";
            kg.step = "0.5";
            kg.placeholder = "Kg";
            kg.value = set.kg;

            const reps = document.createElement("input");
            reps.type = "number";
            reps.inputMode = "numeric";
            reps.min = "0";
            reps.step = "1";
            reps.placeholder = "Rip.";
            reps.value = set.reps;

            const syncInputs = () => {
                set.kg = kg.value;
                set.reps = reps.value;
                persistActiveDraft();
            };

            ["input", "change", "blur"].forEach(evt => {
                kg.addEventListener(evt, syncInputs);
                reps.addEventListener(evt, syncInputs);
            });

            const complete = document.createElement("button");
            complete.type = "button";
            complete.className = "complete-set";
            complete.textContent = set.completed ? "✓" : "○";

            complete.addEventListener("click", () => {
                syncInputs();
                if (!set.completed) {
                    if (set.kg === "" || set.reps === "") {
                        alert("Inserisci kg e ripetizioni prima di completare la serie.");
                        return;
                    }
                    set.completed = true;
                    persistActiveDraft();
                    requestScreenWakeLock();
                    renderExercises();
                    startRestTimer();
                } else {
                    set.completed = false;
                    persistActiveDraft();
                    stopRestTimer();
                    renderExercises();
                }
            });

            row.append(number, kg, reps, complete);
            card.appendChild(row);
        });

        container.appendChild(card);
    });

    updateSummary();
}

function setupAddExerciseUI() {
    const toggleBtn = document.getElementById("toggle-add-exercise");
    const closeBtn = document.getElementById("close-add-exercise");
    const panel = document.getElementById("add-exercise-panel");
    const nameInput = document.getElementById("new-exercise-name");
    const setsInput = document.getElementById("new-exercise-sets");
    const repsInput = document.getElementById("new-exercise-reps");
    const musclesInput = document.getElementById("new-exercise-muscles");
    const previewBox = document.getElementById("new-exercise-preview");
    const confirmBtn = document.getElementById("confirm-add-exercise");
    const restoreBtn = document.getElementById("restore-default-routine");
    const datalist = document.getElementById("exercise-catalog-list");

    if (!panel || !nameInput) return;

    Object.keys(ExerciseKnowledgeBase.catalog).forEach(exName => {
        const option = document.createElement("option");
        option.value = exName;
        datalist.appendChild(option);
    });

    const updatePreview = () => {
        const rawName = nameInput.value.trim();
        if (!rawName) {
            musclesInput.value = "";
            previewBox.innerHTML = "Digita o scegli un esercizio per vedere subito muscoli coinvolti e guida associata.";
            return;
        }
        const match = ExerciseKnowledgeBase.find(rawName);
        musclesInput.value = match.muscles;
        previewBox.innerHTML = match.matchedName
            ? `<strong>Scheda tecnica collegata (${match.matchedName}):</strong> ${match.tip}`
            : `<strong>Nuovo esercizio personalizzato:</strong> verranno applicate automaticamente le linee guida di esecuzione.`;
    };

    toggleBtn?.addEventListener("click", () => {
        panel.classList.toggle("hidden");
        if (!panel.classList.contains("hidden")) { nameInput.focus(); updatePreview(); }
    });

    closeBtn?.addEventListener("click", () => panel.classList.add("hidden"));
    nameInput.addEventListener("input", updatePreview);

    confirmBtn?.addEventListener("click", () => {
        const name = nameInput.value.trim();
        const setsCount = Math.max(1, Math.min(10, Number(setsInput.value) || 3));
        const reps = repsInput.value.trim() || "10-12";
        if (!name) { alert("Inserisci il nome dell'esercizio."); return; }

        const match = ExerciseKnowledgeBase.find(name);
        const muscles = musclesInput.value.trim() || match.muscles;
        const lastSet = getLastSet(name);

        currentWorkout.push({
            name, muscles, targetReps: reps,
            sets: Array.from({ length: setsCount }, () => ({ kg: lastSet ? lastSet.kg : "", reps: "", completed: false }))
        });

        gymData.routines[currentRoutine] = currentWorkout.map(ex => ({
            name: ex.name, muscles: ex.muscles, sets: ex.sets.length, reps: ex.targetReps || "10-12"
        }));
        saveGymData();
        persistActiveDraft();

        nameInput.value = "";
        musclesInput.value = "";
        panel.classList.add("hidden");
        renderRoutine(currentRoutine, currentWorkout);
    });

    restoreBtn?.addEventListener("click", () => {
        if (!confirm(`Vuoi ripristinare gli esercizi originali della Scheda ${currentRoutine}?`)) return;
        gymData.routines[currentRoutine] = null;
        saveGymData();
        GymDB.clearDraft();
        panel.classList.add("hidden");
        renderRoutine(currentRoutine);
    });
}

function updateSummary() {
    const totalSets = currentWorkout.reduce((t, e) => t + e.sets.length, 0);
    const completedSets = currentWorkout.reduce((t, e) => t + e.sets.filter(s => s.completed).length, 0);
    const percentage = totalSets ? Math.round((completedSets / totalSets) * 100) : 0;

    const summary = document.getElementById("routine-summary");
    if (summary) {
        let progress = summary.querySelector(".routine-progress");
        if (!progress) {
            progress = document.createElement("p");
            progress.className = "routine-progress";
            summary.appendChild(progress);
        }
        progress.textContent = `${completedSets} di ${totalSets} serie completate · ${percentage}%`;
    }
}

function playTimerBeep() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        [0, 0.22].forEach(offset => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(880, now + offset);
            gain.gain.setValueAtTime(0.18, now + offset);
            gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.16);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + offset);
            osc.stop(now + offset + 0.17);
        });
    } catch {}
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
}

function tickRestTimer() {
    if (!restEndTime) return;
    const remaining = Math.ceil((restEndTime - Date.now()) / 1000);
    if (remaining > 0) {
        showTimer(remaining);
    } else {
        clearInterval(restInterval);
        restInterval = null;
        restEndTime = null;
        persistActiveDraft();
        showTimerFinished();
        playTimerBeep();
    }
}

function resumeRestTimerFromEndTime(targetEndTime) {
    clearInterval(restInterval);
    restEndTime = targetEndTime;
    persistActiveDraft();
    tickRestTimer();
    restInterval = setInterval(tickRestTimer, 500);
}

function startRestTimer(seconds = DEFAULT_REST_SECONDS) {
    resumeRestTimerFromEndTime(Date.now() + seconds * 1000);
}

function stopRestTimer() {
    clearInterval(restInterval);
    restInterval = null;
    restEndTime = null;
    persistActiveDraft();
    const timer = document.getElementById("rest-timer");
    if (timer) timer.remove();
}

function ensureTimerElement() {
    let timer = document.getElementById("rest-timer");
    if (!timer) {
        timer = document.createElement("div");
        timer.id = "rest-timer";
        timer.className = "rest-timer";
        timer.innerHTML = `
            <span id="rest-timer-text"></span>
            <div class="rest-timer-actions">
                <button type="button" id="rest-add-30">+30s</button>
                <button type="button" id="rest-close">✕</button>
            </div>
        `;
        document.querySelector("main").appendChild(timer);
        timer.querySelector("#rest-add-30").addEventListener("click", () => {
            const base = restEndTime && restEndTime > Date.now() ? restEndTime : Date.now();
            resumeRestTimerFromEndTime(base + 30000);
        });
        timer.querySelector("#rest-close").addEventListener("click", stopRestTimer);
    }
    return timer;
}

function showTimer(seconds) {
    const timer = ensureTimerElement();
    const minutes = Math.floor(seconds / 60);
    const remSec = seconds % 60;
    timer.querySelector("#rest-timer-text").textContent = `⏱ Recupero: ${minutes}:${String(remSec).padStart(2, "0")}`;
}

function showTimerFinished() {
    const timer = ensureTimerElement();
    timer.querySelector("#rest-timer-text").textContent = "✅ Recupero terminato!";
}

function finishWorkout() {
    const completedSets = currentWorkout.reduce((t, e) => t + e.sets.filter(s => s.completed).length, 0);
    if (completedSets === 0) { alert("Completa almeno una serie prima di terminare."); return; }

    const workout = {
        date: new Date().toISOString(),
        routine: currentRoutine,
        name: defaultRoutines[currentRoutine].name,
        exercises: JSON.parse(JSON.stringify(currentWorkout))
    };

    saveWorkout(workout);
    GymDB.clearDraft();
    stopRestTimer();
    releaseScreenWakeLock();

    alert(`Allenamento ${currentRoutine} salvato!\nSerie completate: ${completedSets}`);
    renderRoutine(currentRoutine);
    renderProgress();
    renderHistory();
}

function resetCurrentWorkout() {
    const hasProgress = currentWorkout.some(ex => ex.sets.some(s => s.completed || s.reps !== ""));
    if (hasProgress && !confirm("Vuoi azzerare tutte le serie di questa scheda?")) return;
    GymDB.clearDraft();
    stopRestTimer();
    releaseScreenWakeLock();
    renderRoutine(currentRoutine);
}

function renderHistory() {
    const container = document.getElementById("history-list");
    if (!container) return;
    container.innerHTML = "";
    const workouts = [...gymData.workouts].reverse();

    if (workouts.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-history";
        empty.textContent = "Non hai ancora registrato allenamenti.";
        container.appendChild(empty);
        return;
    }

    workouts.forEach(workout => {
        const card = document.createElement("article");
        card.className = "history-card";
        const date = new Date(workout.date);
        const dateText = date.toLocaleDateString("it-IT", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
        const timeText = date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
        const exercises = Array.isArray(workout.exercises) ? workout.exercises : [];
        const completedSets = exercises.reduce((t, e) => t + (e.sets || []).filter(s => s.completed).length, 0);

        const header = document.createElement("div");
        header.className = "history-header";
        const title = document.createElement("h3");
        title.textContent = workout.name || `Full Body ${workout.routine}`;
        const dateElement = document.createElement("p");
        dateElement.textContent = `${dateText} · ${timeText}`;
        header.append(title, dateElement);

        const summary = document.createElement("div");
        summary.className = "history-summary";
        summary.textContent = `${completedSets} serie completate`;

        const details = document.createElement("div");
        details.className = "history-details";

        exercises.forEach(exercise => {
            const completed = (exercise.sets || []).filter(s => s.completed);
            if (completed.length === 0) return;
            const exEl = document.createElement("div");
            exEl.className = "history-exercise";
            const exTitle = document.createElement("strong");
            exTitle.textContent = exercise.name;
            const setsText = document.createElement("p");
            setsText.textContent = completed.map((s, idx) => `Serie ${idx + 1}: ${s.kg} kg × ${s.reps}`).join(" | ");
            exEl.append(exTitle, setsText);
            details.appendChild(exEl);
        });

        card.append(header, summary, details);
        container.appendChild(card);
    });
}

function setupCardio() {
    const button = document.getElementById("save-cardio");
    if (!button) return;
    button.addEventListener("click", () => {
        const duration = Number(document.getElementById("cardio-duration").value);
        const speed = Number(document.getElementById("cardio-speed").value);
        const incline = Number(document.getElementById("cardio-incline").value);

        if (!duration || duration <= 0) { alert("Inserisci una durata valida."); return; }
        if (speed < 0 || incline < 0) { alert("Valori non possono essere negativi."); return; }

        saveCardio({ date: new Date().toISOString(), duration, speed, incline });
        document.getElementById("cardio-duration").value = "";
        document.getElementById("cardio-speed").value = "";
        document.getElementById("cardio-incline").value = "";
        renderCardioHistory();
        renderProgress();
        alert("Sessione cardio salvata!");
    });
    renderCardioHistory();
}

function renderCardioHistory() {
    const container = document.getElementById("cardio-history");
    if (!container) return;
    container.innerHTML = "";
    const sessions = [...gymData.cardio].reverse();

    if (sessions.length === 0) {
        container.textContent = "Non hai ancora registrato sessioni cardio.";
        container.className = "empty-history";
        return;
    }

    container.className = "history-list";
    sessions.slice(0, 10).forEach(session => {
        const card = document.createElement("article");
        card.className = "history-card";
        const date = new Date(session.date).toLocaleDateString("it-IT");
        const title = document.createElement("h3");
        title.textContent = `${session.duration} minuti di cardio`;
        const details = document.createElement("p");
        details.textContent = `${date} · ${session.speed ?? 0} km/h · Inclinazione ${session.incline ?? 0}%`;
        card.append(title, details);
        container.appendChild(card);
    });
}

function setupBodyWeight() {
    const button = document.getElementById("save-weight");
    if (!button) return;
    button.addEventListener("click", () => {
        const input = document.getElementById("body-weight");
        const weight = Number(input.value);
        if (!weight || weight <= 0 || weight > 500) { alert("Inserisci un peso valido."); return; }
        saveBodyWeight({ date: new Date().toISOString(), weight });
        input.value = "";
        renderProgress();
        alert("Peso corporeo registrato!");
    });
}

function getCompletedSetCount() {
    return gymData.workouts.reduce((t, w) => t + (w.exercises || []).reduce((et, e) => et + (e.sets || []).filter(s => s.completed).length, 0), 0);
}

function getLatestWeight() {
    if (gymData.bodyWeight.length > 0) return gymData.bodyWeight[gymData.bodyWeight.length - 1].weight;
    return gymData.profile.weight;
}

function getExerciseProgression(exerciseName) {
    const entries = [];
    gymData.workouts.forEach(workout => {
        const ex = (workout.exercises || []).find(item => item.name === exerciseName);
        if (!ex || !Array.isArray(ex.sets)) return;
        const weights = ex.sets.filter(s => s.completed && s.kg !== "").map(s => Number(s.kg));
        if (weights.length > 0) entries.push({ date: workout.date, maxKg: Math.max(...weights) });
    });
    return entries.slice(-20);
}

function populateExerciseSelect() {
    const select = document.getElementById("exercise-chart-select");
    if (!select) return;
    const prev = select.value;
    const names = new Set();
    gymData.workouts.forEach(w => (w.exercises || []).forEach(e => { if ((e.sets || []).some(s => s.completed)) names.add(e.name); }));
    select.innerHTML = "";
    if (names.size === 0) {
        const opt = document.createElement("option");
        opt.value = ""; opt.textContent = "Nessun esercizio"; select.appendChild(opt);
        return;
    }
    [...names].forEach(name => {
        const opt = document.createElement("option");
        opt.value = name; opt.textContent = name; select.appendChild(opt);
    });
    if (prev && names.has(prev)) select.value = prev;
}

function renderProgress() {
    const workoutStat = document.getElementById("stat-workouts");
    const setStat = document.getElementById("stat-sets");
    const cardioStat = document.getElementById("stat-cardio");
    const weightStat = document.getElementById("stat-weight");

    if (workoutStat) workoutStat.textContent = gymData.workouts.length;
    if (setStat) setStat.textContent = getCompletedSetCount();
    if (cardioStat) cardioStat.textContent = gymData.cardio.length;
    if (weightStat) weightStat.textContent = `${getLatestWeight()} kg`;

    populateExerciseSelect();
    renderLastWorkout();
    updateCharts();
}

function renderLastWorkout() {
    const container = document.getElementById("progress-last-workout");
    if (!container) return;
    container.innerHTML = "";
    const workout = gymData.workouts[gymData.workouts.length - 1];
    if (!workout) { container.textContent = "Completa il tuo primo allenamento per vedere qui i tuoi risultati."; return; }

    const date = new Date(workout.date);
    const completed = (workout.exercises || []).reduce((t, e) => t + (e.sets || []).filter(s => s.completed).length, 0);
    const title = document.createElement("h3");
    title.textContent = workout.name || `Full Body ${workout.routine}`;
    const details = document.createElement("p");
    details.textContent = `${date.toLocaleDateString("it-IT")} · ${completed} serie completate`;
    container.append(title, details);
}

function getChartColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
        accent: styles.getPropertyValue("--accent").trim() || "#16a34a",
        text: styles.getPropertyValue("--muted").trim() || "#78847c",
        grid: styles.getPropertyValue("--border").trim() || "#e4ebe6"
    };
}

function drawLineChart(canvasId, emptyId, entries, valueKey, suffix) {
    const canvas = document.getElementById(canvasId);
    const empty = document.getElementById(emptyId);
    if (!canvas) return;

    const parent = canvas.parentElement;
    const width = parent.clientWidth || 300;
    const height = parent.clientHeight || 220;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);

    if (!entries.length) { if (empty) empty.style.display = "grid"; return; }
    if (empty) empty.style.display = "none";

    const colors = getChartColors();
    const padding = { top: 22, right: 20, bottom: 35, left: 46 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const values = entries.map(e => Number(e[valueKey]));
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const range = maxValue - minValue || Math.max(maxValue * 0.1, 1);
    const low = Math.max(0, minValue - range * 0.25);
    const high = maxValue + range * 0.25;

    const x = i => entries.length === 1 ? padding.left + chartWidth / 2 : padding.left + (i / (entries.length - 1)) * chartWidth;
    const y = v => padding.top + chartHeight - ((v - low) / (high - low)) * chartHeight;

    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;

    for (let i = 0; i <= 3; i++) {
        const lineY = padding.top + (chartHeight / 3) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, lineY);
        ctx.lineTo(width - padding.right, lineY);
        ctx.stroke();
    }

    ctx.fillStyle = colors.text;
    ctx.font = "10px -apple-system, Segoe UI, Arial";
    ctx.textAlign = "right";

    for (let i = 0; i <= 3; i++) {
        const val = high - ((high - low) / 3) * i;
        ctx.fillText((Number.isInteger(val) ? val.toString() : val.toFixed(1)) + suffix, padding.left - 7, padding.top + (chartHeight / 3) * i + 3);
    }

    ctx.beginPath();
    entries.forEach((e, i) => {
        const px = x(i), py = y(Number(e[valueKey]));
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    });

    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    entries.forEach((e, i) => {
        const px = x(i), py = y(Number(e[valueKey]));
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = colors.accent;
        ctx.fill();
        ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--surface").trim() || "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    ctx.fillStyle = colors.text;
    ctx.textAlign = "center";
    const labelIndexes = entries.length <= 5 ? entries.map((_, i) => i) : [0, Math.floor((entries.length - 1) / 2), entries.length - 1];
    [...new Set(labelIndexes)].forEach(i => {
        const label = new Date(entries[i].date).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" });
        ctx.fillText(label, x(i), height - 10);
    });
}

function updateCharts() {
    const weights = gymData.bodyWeight.slice(-20);
    const cardio = gymData.cardio.slice(-20);
    const select = document.getElementById("exercise-chart-select");
    const selectedExercise = select ? select.value : "";
    const exerciseEntries = selectedExercise ? getExerciseProgression(selectedExercise) : [];

    drawLineChart("exercise-chart", "exercise-empty", exerciseEntries, "maxKg", " kg");
    drawLineChart("weight-chart", "weight-empty", weights, "weight", " kg");
    drawLineChart("cardio-chart", "cardio-empty", cardio, "duration", " min");
}

function setupNavigation() {
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".nav-button").forEach(item => item.classList.remove("active"));
            document.querySelectorAll(".app-section").forEach(sec => sec.classList.remove("active"));
            button.classList.add("active");
            const section = document.getElementById(button.dataset.section);
            if (!section) return;
            section.classList.add("active");
            if (button.dataset.section === "history") renderHistory();
            if (button.dataset.section === "progress") renderProgress();
            if (button.dataset.section === "cardio") renderCardioHistory();
        });
    });
}

function exportGymBackup() {
    const backup = JSON.stringify(gymData, null, 2);
    const blob = new Blob([backup], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gym-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function importGymBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (!imported || !Array.isArray(imported.workouts) || !imported.profile) throw new Error();
            gymData = {
                ...JSON.parse(JSON.stringify(GymDB.initialData)),
                ...imported,
                profile: { ...GymDB.initialData.profile, ...(imported.profile || {}) },
                workouts: Array.isArray(imported.workouts) ? imported.workouts : [],
                bodyWeight: Array.isArray(imported.bodyWeight) ? imported.bodyWeight : [],
                cardio: Array.isArray(imported.cardio) ? imported.cardio : [],
                routines: { ...GymDB.initialData.routines, ...(imported.routines || {}) }
            };
            saveGymData();
            location.reload();
        } catch {
            alert("Impossibile importare il backup: file non valido.");
        }
    };
    reader.readAsText(file);
}

function updateNetworkStatus() {
    const dot = document.getElementById("network-dot");
    const label = document.getElementById("network-status");
    if (!dot || !label) return;
    if (navigator.onLine) {
        dot.classList.remove("offline");
        label.textContent = "Pronto ad allenarti";
    } else {
        dot.classList.add("offline");
        label.textContent = "Modalità offline attiva";
    }
}

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js").catch(() => {});
        });
    }
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        persistActiveDraft();
        saveGymData();
    } else if (document.visibilityState === "visible") {
        if (restEndTime) tickRestTimer();
        if (currentWorkout.some(ex => ex.sets.some(s => s.completed))) requestScreenWakeLock();
    }
});

window.addEventListener("pagehide", () => {
    persistActiveDraft();
    saveGymData();
});

document.addEventListener("DOMContentLoaded", () => {
    registerServiceWorker();
    ThemeManager.init();
    setupNavigation();
    setupCardio();
    setupBodyWeight();
    setupAddExerciseUI();

    document.querySelectorAll(".routine-button").forEach(button => {
        button.addEventListener("click", () => renderRoutine(button.dataset.routine));
    });

    document.getElementById("finish-workout")?.addEventListener("click", finishWorkout);
    document.getElementById("reset-workout")?.addEventListener("click", resetCurrentWorkout);
    document.getElementById("exercise-chart-select")?.addEventListener("change", updateCharts);
    document.getElementById("export-backup")?.addEventListener("click", exportGymBackup);
    document.getElementById("import-backup")?.addEventListener("change", e => importGymBackup(e.target.files[0]));

    const savedDraft = GymDB.getDraft();
    if (savedDraft && savedDraft.routine && defaultRoutines[savedDraft.routine]) {
        renderRoutine(savedDraft.routine, savedDraft.workout, savedDraft.restEndTime);
    } else {
        renderRoutine("A");
    }

    renderHistory();
    renderCardioHistory();
    renderProgress();
    updateNetworkStatus();
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);
    window.addEventListener("resize", updateCharts);
});