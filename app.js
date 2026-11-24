/* =====================================
   GYM TRACKER - APP PRINCIPALE
   Versione 3.1 - Smart Exercise DB + iOS Lock-Safe
===================================== */

const ExerciseKnowledgeBase = {
    catalog: {
    "Leg Press": {
        "muscles": "Quadricipiti e glutei",
        "keywords": [
            "leg press",
            "pressa",
            "pressa gambe"
        ],
        "image": "./assets/exercises/leg-press.jpg",
        "execution": "Posiziona i piedi in modo stabile sulla pedana, in genere circa alla larghezza delle spalle. Sblocca il carrello e scendi solo fin dove riesci a mantenere bacino e schiena appoggiati allo schienale, senza dolore né cedimenti. Spingi attraverso tutto il piede e termina senza forzare il blocco delle ginocchia. La profondità dipende dalla macchina e dalla tua mobilità.",
        "mistakes": [
            "Sollevare i glutei o la zona lombare a fine discesa",
            "Far collassare le ginocchia verso l'interno durante la spinta",
            "Iperestendere le ginocchia a fine ripetizione"
        ],
        "tip": "Mantieni il tallone ben appoggiato alla pedana e frena la discesa per 2 secondi."
    },
    "Chest Press": {
        "muscles": "Pettorali e tricipiti",
        "keywords": [
            "chest press",
            "spinte petto",
            "macchina petto"
        ],
        "image": "./assets/exercises/chest-press.jpg",
        "execution": "Regola il sedile in modo che le maniglie siano all'altezza del centro del petto. Addurre le scapole contro lo schienale, spingi in avanti espirando e torna indietro fino a sentire un leggero allungamento sui pettorali.",
        "mistakes": [
            "Alzare le spalle verso le orecchie durante la spinta",
            "Staccare le scapole dallo schienale in chiusura",
            "Aprire i gomiti a 90° rispetto al busto"
        ],
        "tip": "Scegli una traiettoria confortevole per spalle e gomiti, rispettando la geometria della macchina; evita di forzare un angolo fisso."
    },
    "Chest Press inclinata": {
        "muscles": "Pettorali superiori e tricipiti",
        "keywords": [
            "chest press inclinata",
            "incline press",
            "petto alto"
        ],
        "image": "./assets/exercises/chest-press-inclinata.jpg",
        "execution": "Regola sedile e schienale secondo la traiettoria prevista dalla macchina, con impugnature in posizione confortevole rispetto alla parte alta del petto. Mantieni il tronco stabile, spingi senza forzare il blocco dei gomiti e torna lentamente, evitando dolore alle spalle.",
        "mistakes": [
            "Perdere l'assetto delle scapole a fine spinta",
            "Rimbalzare nella parte bassa del movimento"
        ],
        "tip": "Mantieni il petto alto per tutta la durata della serie."
    },
    "Panca piana": {
        "muscles": "Pettorali, deltoidi anteriori e tricipiti",
        "keywords": [
            "panca piana",
            "bench press",
            "panca bilanciere",
            "panca piana bilanciere"
        ],
        "image": "./assets/exercises/panca-piana.jpg",
        "execution": "Sdraiati con piedi stabili, glutei sulla panca e scapole stabilizzate. Usa un'impugnatura che mantenga polsi e avambracci allineati. Abbassa il bilanciere in modo controllato verso una zona confortevole del petto, senza rimbalzi, poi spingi mantenendo il controllo. Per carichi impegnativi usa supporti di sicurezza o uno spotter competente.",
        "mistakes": [
            "Aprire i gomiti a 90° mettendo stress sulle spalle",
            "Sollevare i glutei dalla panca durante la spinta",
            "Far rimbalzare il bilanciere sul petto"
        ],
        "tip": "Immagina di spezzare il bilanciere con le mani per attivare i dorsali e stabilizzare le spalle."
    },
    "Croci ai cavi": {
        "muscles": "Pettorali (isolamento)",
        "keywords": [
            "croci ai cavi",
            "cable fly"
        ],
        "image": "./assets/exercises/croci-cavi.jpg",
        "execution": "Mantieni i gomiti leggermente flessi con un angolo stabile durante tutta la ripetizione. Apri le braccia in modo controllato entro un'ampiezza confortevole, senza forzare le spalle indietro, poi richiudi davanti al petto.",
        "mistakes": [
            "Piegare e stendere i gomiti trasformandolo in una spinta",
            "Portare le braccia troppo indietro forzando la capsula della spalla"
        ],
        "tip": "Concentrati sull'avvicinare i gomiti tra loro, non solo le mani."
    },
    "Croci ai cavi / Pectoral": {
        "muscles": "Pettorali (isolamento)",
        "keywords": [],
        "image": null,
        "execution": "Pectoral e pec deck sono varianti su macchina: non usare la figura dei cavi per regolarle. Se usi i cavi, consulta la guida Croci ai cavi.",
        "mistakes": [],
        "tip": "Usa le istruzioni specifiche della variante scelta."
    },
    "Lat Machine": {
        "muscles": "Dorsali e bicipiti",
        "keywords": [
            "lat machine",
            "lat pulldown",
            "pulldown alla lat machine"
        ],
        "image": "./assets/exercises/lat-machine.jpg",
        "execution": "Afferra la barra poco oltre la larghezza delle spalle. Blocca le cosce sotto i cuscinetti, deprimi le scapole e tira la barra verso la parte alta del petto inclinando leggermente il busto indietro.",
        "mistakes": [
            "Slanciarsi indietro usando l'inerzia della schiena",
            "Portare i gomiti indietro invece che verso il basso",
            "Tirare la barra dietro la nuca"
        ],
        "tip": "Pensa a spingere i gomiti verso i fianchi, non a tirare con le mani."
    },
    "Lat Machine presa neutra": {
        "muscles": "Dorsali e bicipiti",
        "keywords": [
            "lat machine presa neutra",
            "lat triangolo",
            "presa parallela"
        ],
        "image": "./assets/exercises/lat-machine-presa-neutra.jpg",
        "execution": "Usa un'impugnatura neutra con i palmi rivolti uno verso l'altro. Tieni le cosce sotto i fermi e porta l'impugnatura verso la parte anteriore alta del torace, secondo la geometria dell'attrezzo, mantenendo il busto stabile e i gomiti orientati verso il basso.",
        "mistakes": [
            "Tirare solo con i bicipiti arrotondando le spalle",
            "Dondolare eccessivamente con il tronco"
        ],
        "tip": "Mantieni una presa comoda e non inclinare eccessivamente il busto per raggiungere il torace con l'impugnatura."
    },
    "Leg Curl": {
        "muscles": "Femorali",
        "keywords": [
            "leg curl",
            "hamstring curl"
        ],
        "image": "./assets/exercises/leg-curl.jpg",
        "execution": "Allinea l'asse di rotazione della macchina con il ginocchio e posiziona il rullo appena sopra i talloni. Fletti le gambe portando i talloni verso i glutei e controlla il ritorno.",
        "mistakes": [
            "Sollevare il bacino dal cuscino durante la contrazione",
            "Lasciare cadere il peso nella fase di ritorno"
        ],
        "tip": "Mantieni caviglie e piedi in una posizione comoda e stabile, senza forzare la dorsiflessione."
    },
    "Stacco rumeno con manubri": {
        "muscles": "Femorali e glutei",
        "keywords": [
            "stacco rumeno",
            "stacco rumeno con manubri",
            "rdl manubri",
            "romanian deadlift dumbbells"
        ],
        "image": "./assets/exercises/rdl-dumbbells.jpg",
        "execution": "In piedi con i manubri davanti alle cosce e ginocchia leggermente flesse, spingi il bacino indietro mantenendo la colonna in posizione neutra. Scendi fin dove riesci a mantenere questa posizione e senti lavorare la parte posteriore delle cosce; non è necessario raggiungere una quota fissa. Risali riportando il bacino in avanti senza inarcare la schiena.",
        "mistakes": [
            "Curvare la zona lombare in discesa",
            "Piegare eccessivamente le ginocchia trasformandolo in uno squat"
        ],
        "tip": "Fermati appena senti che il bacino non arretra più e i femorali sono in massima tensione."
    },
    "Machine Row": {
        "muscles": "Dorsali e parte centrale della schiena",
        "keywords": [
            "machine row",
            "rematore macchina"
        ],
        "image": "./assets/exercises/machine-row.jpg",
        "execution": "Appoggia bene il petto al supporto, afferra le maniglie e tira i gomiti indietro avvicinando le scapole tra loro. Mantieni il busto fermo.",
        "mistakes": [
            "Staccare il petto dal cuscino per aiutarsi con la schiena",
            "Arrotondare le spalle in avanti in fase di chiusura"
        ],
        "tip": "Fai una pausa di mezzo secondo quando le maniglie arrivano al busto."
    },
    "Low Row": {
        "muscles": "Dorsali e romboidi",
        "keywords": [
            "low row",
            "rematore basso"
        ],
        "image": "./assets/exercises/low-row.jpg",
        "execution": "Siediti con la schiena dritta, afferra la maniglia bassa e tira verso l'ombelico mantenendo i gomiti vicini al corpo e le spalle basse.",
        "mistakes": [
            "Inclinarsi eccessivamente in avanti e indietro",
            "Chiudere le spalle in avanti a fine tirata"
        ],
        "tip": "Apri il petto mentre tiri la maniglia verso l'addome."
    },
    "Cable Row": {
        "muscles": "Dorsali e schiena",
        "keywords": [
            "cable row",
            "pulley",
            "rematore al cavo",
            "rematore cavo"
        ],
        "image": "./assets/exercises/cable-row.jpg",
        "execution": "Seduto al pulley basso con ginocchia leggermente flesse, mantieni la colonna neutra e porta la maniglia verso l'addome avvicinando le scapole.",
        "mistakes": [
            "Incurvare la schiena in avanti per allungare troppo",
            "Slanciarsi indietro oltre la verticale"
        ],
        "tip": "Il busto rimane fermo come una statua: si muovono solo braccia e scapole."
    },
    "Alzate laterali": {
        "muscles": "Deltoide laterale",
        "keywords": [
            "alzate laterali",
            "lateral raise",
            "spalle laterali"
        ],
        "image": "./assets/exercises/lateral-raise.jpg",
        "execution": "In piedi con manubri leggeri e gomiti leggermente flessi, solleva le braccia lateralmente nel piano più confortevole per le spalle. Fermati all'altezza che controlli senza dolore o compensi del busto.",
        "mistakes": [
            "Dondolare con il busto per slanciare i manubri",
            "Alzare le spalle verso le orecchie o forzare un'ampiezza dolorosa"
        ],
        "tip": "Immagina di allontanare i manubri dalle pareti invece di sollevarli verso l'alto."
    },
    "Shoulder Press": {
        "muscles": "Spalle e tricipiti",
        "keywords": [
            "shoulder press",
            "shoulder press macchina",
            "spinte spalle macchina"
        ],
        "image": "./assets/exercises/shoulder-press.jpg",
        "execution": "Regola il sedile della shoulder press in modo che le impugnature siano raggiungibili senza forzare le spalle. Mantieni tronco e bacino stabili, spingi lungo la traiettoria della macchina e ritorna lentamente entro un'ampiezza confortevole.",
        "mistakes": [
            "Inarcare la schiena staccandola dallo schienale",
            "Portare i gomiti troppo indietro rispetto al piano delle scapole"
        ],
        "tip": "Tieni i gomiti leggermente davanti al busto."
    },
    "Hip Thrust": {
        "muscles": "Glutei",
        "keywords": [
            "hip thrust",
            "hip thrust con panca"
        ],
        "image": "./assets/exercises/hip-thrust.jpg",
        "execution": "Appoggia la parte bassa delle scapole su una panca, piedi alla larghezza delle spalle. Spingi sui talloni sollevando il bacino fino a allineare cosce e busto, mantenendo il mento leggermente verso lo sterno.",
        "mistakes": [
            "Iperestendere la schiena in cima al movimento",
            "Spingere sulle punte dei piedi anziché sui talloni"
        ],
        "tip": "Mantieni il collo comodo e in linea con il busto; evita di iperestendere la zona lombare in chiusura."
    },
    "Hack Squat": {
        "muscles": "Quadricipiti e glutei",
        "keywords": [
            "hack squat",
            "hack squat machine"
        ],
        "image": "./assets/exercises/hack-squat.jpg",
        "execution": "Sulla macchina hack squat, appoggia schiena e spalle ai supporti e posiziona i piedi stabilmente sulla pedana. Scendi solo fin dove riesci a mantenere talloni appoggiati e bacino controllato, senza dolore. Risali spingendo con tutto il piede, senza bloccare forzatamente le ginocchia.",
        "mistakes": [
            "Alzare i talloni dalla pedana",
            "Staccare la zona lombare dallo schienale in buca"
        ],
        "tip": "Mantieni il peso distribuito su tutto il piede (tripode: tallone, alluce, mignolo)."
    },
    "Hack Squat / Leg Press": {
        "muscles": "Quadricipiti e glutei",
        "keywords": [],
        "image": null,
        "execution": "Scegli la macchina effettiva: per la leg press consulta la guida Leg Press; per l’hack squat consulta la guida Hack Squat.",
        "mistakes": [],
        "tip": "Usa le istruzioni specifiche della variante scelta."
    },
    "Leg Extension": {
        "muscles": "Quadricipiti",
        "keywords": [
            "leg extension",
            "estensioni gambe"
        ],
        "image": "./assets/exercises/leg-extension.jpg",
        "execution": "Regola la macchina in modo che il perno sia allineato con l'articolazione del ginocchio e il rullo appoggi sulla parte bassa della tibia, sopra la caviglia. Estendi le ginocchia in modo controllato entro un'ampiezza confortevole, senza scatti né blocco forzato, poi ritorna lentamente.",
        "mistakes": [
            "Dare uno strattone iniziale con i fianchi",
            "Scendere troppo velocemente"
        ],
        "tip": "Controlla soprattutto i primi gradi di discesa."
    },
    "Curl bicipiti": {
        "muscles": "Bicipiti",
        "keywords": [
            "curl bicipiti",
            "curl manubri"
        ],
        "image": "./assets/exercises/bicep-curl.jpg",
        "execution": "In piedi con manubri o bilanciere, gomiti fermi lungo i fianchi. Fletti l'avambraccio portando il carico verso le spalle senza muovere i gomiti in avanti.",
        "mistakes": [
            "Usare la schiena per slanciare il peso",
            "Portare i gomiti in avanti a fine ripetizione"
        ],
        "tip": "Strizza il bicipite in alto per un secondo e scendi in 2-3 secondi."
    },
    "Pushdown tricipiti": {
        "muscles": "Tricipiti",
        "keywords": [
            "pushdown",
            "tricipiti al cavo",
            "estensioni tricipiti al cavo"
        ],
        "image": "./assets/exercises/tricep-pushdown.jpg",
        "execution": "Al cavo alto, mantieni i gomiti vicini ai fianchi e relativamente fermi. Spingi la barra o la corda verso il basso estendendo i gomiti in modo controllato, senza forzare il blocco articolare; ritorna lentamente finché l'avambraccio è nuovamente flesso in modo confortevole.",
        "mistakes": [
            "Allargare i gomiti o portarli avanti e indietro",
            "Appoggiarsi con il peso del corpo sopra la maniglia"
        ],
        "tip": "Tieni le spalle basse e i polsi dritti."
    },
    "Pallof Press": {
        "muscles": "Addome e core",
        "keywords": [
            "pallof",
            "pallof press",
            "anti-rotazione al cavo"
        ],
        "image": "./assets/exercises/pallof-press.jpg",
        "execution": "Posizionati lateralmente rispetto al cavo regolato all'altezza dello sterno. Afferra la maniglia con entrambe le mani al centro del petto, distendi completamente le braccia in avanti resistendo alla rotazione del busto e ritorna.",
        "mistakes": [
            "Lasciare che il cavo ruoti il tronco o le spalle",
            "Inarcare la zona lombare"
        ],
        "tip": "Contrai glutei e addome prima ancora di distendere le braccia."
    },
    "Dead Bug": {
        "muscles": "Addome e core",
        "keywords": [
            "dead bug"
        ],
        "image": "./assets/exercises/dead-bug.jpg",
        "execution": "Sdraiati supino con braccia rivolte verso il soffitto e anche e ginocchia flesse. Mantieni il tronco stabile e abbassa lentamente un braccio e la gamba opposta solo fin dove riesci a controllare il bacino e la posizione lombare senza dolore. Ritorna e alterna i lati; riduci l'ampiezza se perdi il controllo.",
        "mistakes": [
            "Perdere il controllo della posizione lombare durante l'allungamento",
            "Eseguire il movimento troppo velocemente"
        ],
        "tip": "Espira lentamente mentre allunghi braccio e gamba."
    },
    "Plank rialzato": {
        "muscles": "Addome e core",
        "keywords": [
            "plank rialzato",
            "incline plank",
            "plank su panca"
        ],
        "image": "./assets/exercises/plank-rialzato.jpg",
        "execution": "Appoggia gli avambracci o le mani su una panca stabile, corpo in linea dalla testa ai talloni. Contrai forte glutei e addome mantenendo la respirazione regolare.",
        "mistakes": [
            "Lasciar cadere il bacino verso il basso",
            "Alzare troppo i glutei"
        ],
        "tip": "Immagina di voler avvicinare gomiti e punte dei piedi senza muoverli."
    },
    "Panca inclinata bilanciere": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Tricipiti, deltoidi anteriori",
        "equipment": "Bilanciere e panca inclinata",
        "keywords": [
            "incline barbell bench press",
            "panca inclinata con bilanciere"
        ],
        "image": null,
        "execution": "Regola la panca a circa 15–30 gradi, piedi stabili e scapole appoggiate. Abbassa la barra verso il petto alto con avambracci quasi verticali, poi spingi verso l'alto.",
        "mistakes": [
            "Rimbalzo sul petto",
            "polsi piegati eccessivamente"
        ],
        "tip": "Usa fermi di sicurezza o assistente.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Panca inclinata manubri": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Tricipiti, deltoidi anteriori",
        "equipment": "Manubri e panca inclinata",
        "keywords": [
            "incline dumbbell press",
            "panca inclinata con manubri"
        ],
        "image": null,
        "execution": "Con schiena appoggiata e piedi a terra, abbassa i manubri ai lati del petto mantenendo i polsi sopra i gomiti. Spingi in alto senza urtarli.",
        "mistakes": [
            "Gomiti troppo aperti",
            "inarcare eccessivamente la schiena"
        ],
        "tip": "Scegli un'inclinazione moderata.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Panca piana manubri": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Tricipiti, deltoidi anteriori",
        "equipment": "Manubri e panca",
        "keywords": [
            "dumbbell bench press",
            "spinte manubri panca piana"
        ],
        "image": null,
        "execution": "Sdraiati con piedi stabili e manubri sopra il petto. Abbassali ai lati del torace in un arco confortevole, poi spingi in alto.",
        "mistakes": [
            "Perdere l'appoggio del bacino",
            "scendere oltre la mobilità"
        ],
        "tip": "Controlla la fase di discesa.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Pec Deck": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Deltoidi anteriori",
        "equipment": "Macchina pec deck",
        "keywords": [
            "butterfly",
            "pectoral machine",
            "chest fly machine"
        ],
        "image": null,
        "execution": "Regola il sedile affinché le impugnature siano circa all'altezza del petto. Avvicina le braccia davanti al torace con gomiti leggermente flessi, poi riapri senza forzare.",
        "mistakes": [
            "Aprire troppo le spalle",
            "slanciarsi in avanti"
        ],
        "tip": "Mantieni la schiena sul supporto.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Croci manubri panca piana": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Deltoidi anteriori",
        "equipment": "Manubri e panca",
        "keywords": [
            "dumbbell fly",
            "croci con manubri su panca piana"
        ],
        "image": null,
        "execution": "Parti con manubri sopra il petto e gomiti appena flessi. Apri le braccia ad arco fino a un allungamento confortevole, poi richiudile mantenendo simile l'angolo dei gomiti.",
        "mistakes": [
            "Trasformare le croci in spinte",
            "abbassare troppo i manubri"
        ],
        "tip": "Usa carichi moderati.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Croci ai cavi alti": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Deltoidi anteriori",
        "equipment": "Doppio cavo alto",
        "keywords": [
            "high to low cable fly",
            "croci cavi alti"
        ],
        "image": null,
        "execution": "Con un piede avanti e cavi sopra le spalle, porta le mani in avanti e leggermente verso il basso con gomiti morbidi. Torna lentamente.",
        "mistakes": [
            "Oscillare il busto",
            "flettere molto i gomiti"
        ],
        "tip": "Mantieni il tronco stabile.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Croci ai cavi bassi": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Deltoidi anteriori",
        "equipment": "Doppio cavo basso",
        "keywords": [
            "low to high cable fly",
            "croci cavi bassi"
        ],
        "image": null,
        "execution": "Parti con mani ai lati delle anche e cavi bassi. Avvicina le mani in avanti e verso il petto alto, con gomiti leggermente flessi. Ritorna controllando.",
        "mistakes": [
            "Inarcare la schiena",
            "sollevare le spalle"
        ],
        "tip": "Non trasformare il movimento in un'alzata frontale.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Push-up": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Tricipiti, deltoidi anteriori, core",
        "equipment": "Corpo libero",
        "keywords": [
            "piegamenti sulle braccia",
            "push ups",
            "flessioni"
        ],
        "image": null,
        "execution": "Mani poco oltre la larghezza delle spalle, corpo allineato. Piega i gomiti obliquamente indietro abbassando il torace, poi spingi fino alla posizione iniziale.",
        "mistakes": [
            "Bacino che cede",
            "gomiti eccessivamente aperti"
        ],
        "tip": "Usa un rialzo stabile se necessario.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Dips petto": {
        "muscles": "Pettorali",
        "secondaryMuscles": "Tricipiti, deltoidi anteriori",
        "equipment": "Parallele",
        "keywords": [
            "chest dips",
            "dip petto"
        ],
        "image": null,
        "execution": "In appoggio alle parallele inclina leggermente il busto in avanti. Fletti i gomiti entro un arco indolore, quindi spingi tornando in alto.",
        "mistakes": [
            "Scendere oltre la mobilità della spalla",
            "rimbalzare"
        ],
        "tip": "Riduci il carico con assistenza se necessario.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Trazioni presa prona": {
        "muscles": "Dorsali",
        "secondaryMuscles": "Bicipiti, brachiale, muscoli scapolari",
        "equipment": "Sbarra",
        "keywords": [
            "pull up",
            "pull ups",
            "trazioni alla sbarra"
        ],
        "image": null,
        "execution": "Afferra la sbarra con palmi avanti. Tira i gomiti verso il basso portando il mento sopra la sbarra senza slancio, poi scendi controllando.",
        "mistakes": [
            "Dondolare",
            "estendere il collo per superare la sbarra"
        ],
        "tip": "Usa assistenza per mantenere la tecnica.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Chin-up": {
        "muscles": "Dorsali, bicipiti",
        "secondaryMuscles": "Brachiale, muscoli scapolari",
        "equipment": "Sbarra",
        "keywords": [
            "chin up",
            "trazioni presa supina"
        ],
        "image": null,
        "execution": "Afferra la sbarra con palmi verso di te. Solleva il corpo flettendo i gomiti e portandoli verso i fianchi, poi torna lentamente.",
        "mistakes": [
            "Slanciare le gambe",
            "forzare i polsi"
        ],
        "tip": "Adatta la larghezza della presa.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Rematore manubrio un braccio": {
        "muscles": "Dorsali, romboidi",
        "secondaryMuscles": "Bicipiti, deltoidi posteriori",
        "equipment": "Manubrio e panca",
        "keywords": [
            "one arm dumbbell row",
            "rematore manubrio",
            "rematore unilaterale"
        ],
        "image": null,
        "execution": "Appoggia una mano su una panca stabile e inclina il busto. Tira il manubrio verso il fianco, quindi abbassalo mantenendo il tronco controllato.",
        "mistakes": [
            "Ruotare il busto",
            "sollevare la spalla"
        ],
        "tip": "Mantieni il collo neutro.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Rematore bilanciere": {
        "muscles": "Dorsali, trapezio medio, romboidi",
        "secondaryMuscles": "Bicipiti, erettori spinali",
        "equipment": "Bilanciere",
        "keywords": [
            "bent over barbell row",
            "barbell row"
        ],
        "image": null,
        "execution": "Con ginocchia morbide inclina il busto dalle anche. Tira la barra verso l'addome senza cambiare inclinazione, poi distendi le braccia.",
        "mistakes": [
            "Slanciare il busto",
            "perdere la posizione lombare"
        ],
        "tip": "Riduci il carico se non mantieni l'assetto.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "T-Bar Row": {
        "muscles": "Dorsali, romboidi",
        "secondaryMuscles": "Bicipiti, deltoidi posteriori",
        "equipment": "Macchina T-bar",
        "keywords": [
            "t bar row",
            "rematore t bar"
        ],
        "image": null,
        "execution": "Posizionati sulla pedana e inclina il busto oppure appoggia il petto se previsto. Tira le maniglie verso il tronco e ritorna senza rimbalzi.",
        "mistakes": [
            "Strappare il carico",
            "sollevare il busto"
        ],
        "tip": "Segui la traiettoria della macchina.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Straight-Arm Pulldown": {
        "muscles": "Dorsali",
        "secondaryMuscles": "Grande rotondo, tricipite capo lungo",
        "equipment": "Cavo alto",
        "keywords": [
            "pulldown braccia tese",
            "pullover al cavo"
        ],
        "image": null,
        "execution": "Con busto leggermente inclinato e gomiti morbidi, porta la barra dall'alto verso le cosce muovendo soprattutto le spalle. Risali controllando.",
        "mistakes": [
            "Flettere i gomiti",
            "inarcare la schiena"
        ],
        "tip": "Usa un arco indolore.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Pulldown unilaterale al cavo": {
        "muscles": "Dorsali",
        "secondaryMuscles": "Bicipiti, brachiale",
        "equipment": "Cavo alto",
        "keywords": [
            "one arm lat pulldown",
            "lat unilaterale"
        ],
        "image": null,
        "execution": "Seduto o in ginocchio stabile, afferra una maniglia alta. Tira il gomito verso il fianco e lascia risalire il braccio in modo controllato.",
        "mistakes": [
            "Ruotare il tronco",
            "tirare con slancio"
        ],
        "tip": "Allinea il cavo al braccio che lavora.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Military Press bilanciere": {
        "muscles": "Deltoidi anteriori e laterali",
        "secondaryMuscles": "Tricipiti, trapezio, core",
        "equipment": "Bilanciere",
        "keywords": [
            "standing military press",
            "overhead press",
            "military press"
        ],
        "image": null,
        "execution": "In piedi con barra davanti alle spalle, addome stabile. Spingi la barra sopra la testa lungo una traiettoria vicina al corpo e abbassala al petto alto.",
        "mistakes": [
            "Iperestendere la zona lombare",
            "spingere con le gambe"
        ],
        "tip": "Mantieni le costole controllate.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Shoulder Press manubri": {
        "muscles": "Deltoidi",
        "secondaryMuscles": "Tricipiti, trapezio",
        "equipment": "Manubri e panca",
        "keywords": [
            "dumbbell shoulder press",
            "spinte spalle manubri"
        ],
        "image": null,
        "execution": "Seduto con schiena stabile, parti con manubri all'altezza delle spalle. Spingi verso l'alto senza urtarli, poi torna in un arco comodo.",
        "mistakes": [
            "Inarcare la schiena",
            "gomiti troppo arretrati"
        ],
        "tip": "Mantieni gli avambracci sotto i pesi.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Arnold Press": {
        "muscles": "Deltoidi",
        "secondaryMuscles": "Tricipiti",
        "equipment": "Manubri e panca",
        "keywords": [
            "arnold dumbbell press",
            "arnold press manubri"
        ],
        "image": null,
        "execution": "Parti con manubri davanti alle spalle e palmi verso il viso. Ruota gradualmente le braccia mentre spingi in alto, invertendo la rotazione in discesa.",
        "mistakes": [
            "Forzare la rotazione",
            "inarcare la schiena"
        ],
        "tip": "Usa carichi leggeri se il gesto è nuovo.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Alzate laterali al cavo": {
        "muscles": "Deltoidi laterali",
        "secondaryMuscles": "Sovraspinato, trapezio",
        "equipment": "Cavo basso",
        "keywords": [
            "cable lateral raise",
            "alzate laterali cavo"
        ],
        "image": null,
        "execution": "Con maniglia bassa, solleva il braccio lateralmente nel piano leggermente anteriore al busto fino a circa altezza spalla. Ritorna lentamente.",
        "mistakes": [
            "Alzare la spalla",
            "oscillare il tronco"
        ],
        "tip": "Mantieni il gomito morbido.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Alzate frontali manubri": {
        "muscles": "Deltoidi anteriori",
        "secondaryMuscles": "Pettorali superiori, trapezio",
        "equipment": "Manubri",
        "keywords": [
            "front raise",
            "dumbbell front raise",
            "alzate frontali"
        ],
        "image": null,
        "execution": "In piedi con manubri davanti alle cosce, solleva le braccia in avanti fino a circa altezza spalla e abbassale controllando.",
        "mistakes": [
            "Slanciare il busto",
            "inarcare la schiena"
        ],
        "tip": "Non serve sollevare oltre un arco comodo.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Rear Delt Fly machine": {
        "muscles": "Deltoidi posteriori",
        "secondaryMuscles": "Romboidi, trapezio medio",
        "equipment": "Macchina reverse fly",
        "keywords": [
            "reverse pec deck",
            "reverse machine fly",
            "deltoidi posteriori macchina"
        ],
        "image": null,
        "execution": "Siediti rivolto verso lo schienale con petto appoggiato. Apri le braccia lateralmente e indietro con gomiti morbidi, poi ritorna.",
        "mistakes": [
            "Sollevare le spalle",
            "staccare il petto"
        ],
        "tip": "Regola le maniglie ad altezza spalle.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Face Pull": {
        "muscles": "Deltoidi posteriori, trapezio medio",
        "secondaryMuscles": "Romboidi, rotatori esterni",
        "equipment": "Cavo e corda",
        "keywords": [
            "facepull",
            "face pull al cavo"
        ],
        "image": null,
        "execution": "Con cavo circa all'altezza del viso, afferra la corda e tira le estremità verso i lati del viso portando i gomiti verso l'esterno. Ritorna senza muovere il tronco.",
        "mistakes": [
            "Inclinarsi indietro",
            "forzare la rotazione delle spalle"
        ],
        "tip": "Carico leggero e movimento controllato.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Tirate al mento al cavo": {
        "muscles": "Deltoidi laterali, trapezio",
        "secondaryMuscles": "Bicipiti",
        "equipment": "Cavo basso",
        "keywords": [
            "cable upright row",
            "upright row"
        ],
        "image": null,
        "execution": "Con presa comoda tira la maniglia vicino al corpo, sollevando i gomiti fino a un'altezza indolore, senza obbligo di raggiungere il mento. Abbassa lentamente.",
        "mistakes": [
            "Forzare l'altezza",
            "presa troppo stretta se causa dolore"
        ],
        "tip": "Interrompi se senti fastidio alla spalla.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Curl bilanciere": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale, brachioradiale",
        "equipment": "Bilanciere",
        "keywords": [
            "barbell curl",
            "curl con bilanciere"
        ],
        "image": null,
        "execution": "In piedi con presa supina e gomiti vicini al tronco, fletti i gomiti portando la barra verso le spalle. Estendi lentamente.",
        "mistakes": [
            "Slanciare la schiena",
            "spostare i gomiti avanti"
        ],
        "tip": "Mantieni i polsi neutri.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Curl EZ": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale, brachioradiale",
        "equipment": "Bilanciere EZ",
        "keywords": [
            "ez bar curl",
            "curl bilanciere ez"
        ],
        "image": null,
        "execution": "Afferra le sezioni angolate della barra con presa comoda, fletti i gomiti senza muovere il busto e abbassa il carico lentamente.",
        "mistakes": [
            "Piegare i polsi",
            "usare slancio"
        ],
        "tip": "Scegli l'angolo di presa più confortevole.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Curl manubri alternato": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale, brachioradiale",
        "equipment": "Manubri",
        "keywords": [
            "alternating dumbbell curl",
            "curl alternato"
        ],
        "image": null,
        "execution": "Con manubri ai fianchi, fletti un gomito ruotando il palmo verso l'alto. Abbassa lentamente e alterna le braccia.",
        "mistakes": [
            "Ruotare il busto",
            "portare la spalla avanti"
        ],
        "tip": "Mantieni fermo il braccio non attivo.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Hammer Curl": {
        "muscles": "Brachiale, brachioradiale, bicipiti",
        "secondaryMuscles": "Muscoli della presa",
        "equipment": "Manubri",
        "keywords": [
            "curl a martello",
            "hammer curls"
        ],
        "image": null,
        "execution": "Tieni i manubri con palmi rivolti verso il corpo. Fletti i gomiti conservando la presa neutra, poi abbassa lentamente.",
        "mistakes": [
            "Ruotare i polsi",
            "oscillare il busto"
        ],
        "tip": "Mantieni i gomiti vicino ai fianchi.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Curl panca inclinata": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale",
        "equipment": "Manubri e panca inclinata",
        "keywords": [
            "incline dumbbell curl",
            "curl su panca inclinata"
        ],
        "image": null,
        "execution": "Seduto con schiena appoggiata, lascia le braccia pendere in posizione comoda. Fletti i gomiti senza far avanzare le spalle, poi torna lentamente.",
        "mistakes": [
            "Forzare l'estensione della spalla",
            "slanciare"
        ],
        "tip": "Riduci l'inclinazione se senti tensione articolare.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Preacher Curl machine": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale",
        "equipment": "Macchina curl Scott",
        "keywords": [
            "machine preacher curl",
            "curl scott macchina"
        ],
        "image": null,
        "execution": "Regola il sedile affinché le braccia siano appoggiate al cuscino e i gomiti in linea con il perno. Fletti i gomiti e ritorna senza iperestenderli.",
        "mistakes": [
            "Staccare le braccia dal supporto",
            "rimbalzare in basso"
        ],
        "tip": "Mantieni il carico sotto controllo.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Cable Curl": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale, brachioradiale",
        "equipment": "Cavo basso",
        "keywords": [
            "standing cable curl",
            "curl al cavo"
        ],
        "image": null,
        "execution": "Con barra collegata al cavo basso, gomiti vicino al busto, fletti le braccia e torna lentamente senza spostare le spalle.",
        "mistakes": [
            "Inclinarsi indietro",
            "muovere i gomiti"
        ],
        "tip": "Mantieni tensione controllata.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Concentration Curl": {
        "muscles": "Bicipiti",
        "secondaryMuscles": "Brachiale",
        "equipment": "Manubrio e panca",
        "keywords": [
            "curl concentrato",
            "concentration curls"
        ],
        "image": null,
        "execution": "Seduto, appoggia la parte posteriore del braccio all'interno della coscia. Fletti il gomito portando il manubrio verso la spalla, poi abbassalo.",
        "mistakes": [
            "Aiutarsi con la gamba",
            "ruotare il tronco"
        ],
        "tip": "Non premere direttamente sul gomito.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Pushdown barra": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Muscoli della presa",
        "equipment": "Cavo alto e barra",
        "keywords": [
            "bar pushdown",
            "triceps pushdown bar",
            "push down barra"
        ],
        "image": null,
        "execution": "Con barra al cavo alto e gomiti ai fianchi, estendi i gomiti verso il basso. Torna flettendoli senza spostare le spalle.",
        "mistakes": [
            "Usare il peso del corpo",
            "allargare i gomiti"
        ],
        "tip": "Mantieni i polsi allineati.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Pushdown corda": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Muscoli della presa",
        "equipment": "Cavo alto e corda",
        "keywords": [
            "rope pushdown",
            "triceps rope pushdown",
            "pushdown con corda"
        ],
        "image": null,
        "execution": "Afferra la corda con presa neutra, estendi i gomiti verso il basso e separa leggermente le estremità se comodo. Ritorna controllando.",
        "mistakes": [
            "Oscillare il busto",
            "spostare i gomiti"
        ],
        "tip": "Non forzare la separazione della corda.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Estensione tricipiti sopra testa corda": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Stabilizzatori della spalla",
        "equipment": "Cavo e corda",
        "keywords": [
            "overhead rope triceps extension",
            "estensioni tricipiti corda sopra testa"
        ],
        "image": null,
        "execution": "Con schiena al cavo e corda dietro la testa, mantieni i gomiti orientati avanti. Estendili senza inarcare il tronco e ritorna lentamente.",
        "mistakes": [
            "Aprire molto i gomiti",
            "iperestendere la schiena"
        ],
        "tip": "Regola il cavo per una traiettoria comoda.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "French Press EZ": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Stabilizzatori della spalla",
        "equipment": "Bilanciere EZ e panca",
        "keywords": [
            "skullcrusher",
            "ez bar skullcrusher",
            "french press"
        ],
        "image": null,
        "execution": "Sdraiato, tieni la barra sopra le spalle. Fletti i gomiti portando la barra verso o dietro la fronte in sicurezza, poi estendili.",
        "mistakes": [
            "Lasciare cadere la barra",
            "allargare molto i gomiti"
        ],
        "tip": "Usa un carico gestibile e assistenza se necessaria.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Estensione manubrio sopra testa unilaterale": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Stabilizzatori della spalla",
        "equipment": "Manubrio",
        "keywords": [
            "one arm overhead triceps extension",
            "french press manubrio unilaterale"
        ],
        "image": null,
        "execution": "Tieni un manubrio sopra la testa, braccio stabile. Fletti il gomito abbassando il peso dietro la testa, poi estendilo senza forzare.",
        "mistakes": [
            "Inarcare la schiena",
            "muovere il braccio"
        ],
        "tip": "Scegli un arco indolore.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Dip machine": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Pettorali, deltoidi anteriori",
        "equipment": "Macchina dip seduta",
        "keywords": [
            "seated dip machine",
            "dips macchina"
        ],
        "image": null,
        "execution": "Regola il sedile e afferra le leve. Spingi verso il basso estendendo i gomiti con busto stabile, poi ritorna controllando.",
        "mistakes": [
            "Sollevare le spalle",
            "staccare il bacino"
        ],
        "tip": "Non forzare la posizione iniziale.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Dips tricipiti": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Pettorali, deltoidi anteriori",
        "equipment": "Parallele",
        "keywords": [
            "triceps dips",
            "dip tricipiti"
        ],
        "image": null,
        "execution": "Mantieni il busto relativamente verticale sulle parallele. Piega i gomiti entro un arco confortevole, poi spingi in alto.",
        "mistakes": [
            "Scendere troppo",
            "oscillare"
        ],
        "tip": "Usa assistenza se necessario.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Panca piana presa stretta": {
        "muscles": "Tricipiti, pettorali",
        "secondaryMuscles": "Deltoidi anteriori",
        "equipment": "Bilanciere e panca",
        "keywords": [
            "close grip bench press",
            "panca stretta"
        ],
        "image": null,
        "execution": "Con presa circa alla larghezza delle spalle, abbassa la barra al torace mantenendo i gomiti obliqui al busto. Spingi verso l'alto.",
        "mistakes": [
            "Presa eccessivamente stretta",
            "rimbalzo sul petto"
        ],
        "tip": "Usa fermi o assistente.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Triceps Extension machine": {
        "muscles": "Tricipiti",
        "secondaryMuscles": "Stabilizzatori della spalla",
        "equipment": "Macchina estensione tricipiti",
        "keywords": [
            "machine triceps extension",
            "tricipiti macchina"
        ],
        "image": null,
        "execution": "Regola sedile e supporti affinché il gomito sia allineato al perno. Estendi i gomiti seguendo la leva e ritorna lentamente.",
        "mistakes": [
            "Staccare le braccia dai supporti",
            "forzare il blocco"
        ],
        "tip": "Segui le regolazioni specifiche della macchina.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Back Squat": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core, erettori spinali",
        "equipment": "Bilanciere e rack",
        "keywords": [
            "barbell back squat",
            "squat bilanciere",
            "squat"
        ],
        "image": null,
        "execution": "Posiziona la barra sui trapezi o deltoidi posteriori, piedi stabili. Fletti anche e ginocchia mantenendo il carico sul piede intero, poi risali.",
        "mistakes": [
            "Perdere l'assetto lombare",
            "ginocchia che cedono verso l'interno"
        ],
        "tip": "Regola i fermi di sicurezza e la profondità.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Front Squat": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Core, parte alta della schiena",
        "equipment": "Bilanciere e rack",
        "keywords": [
            "barbell front squat",
            "squat frontale"
        ],
        "image": null,
        "execution": "Appoggia la barra davanti sulle spalle con gomiti alti. Scendi piegando anche e ginocchia mantenendo il busto stabile, poi risali.",
        "mistakes": [
            "Abbassare i gomiti",
            "perdere l'appoggio dei piedi"
        ],
        "tip": "Usa fermi di sicurezza.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Goblet Squat": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Manubrio o kettlebell",
        "keywords": [
            "squat goblet",
            "goblet squat manubrio"
        ],
        "image": null,
        "execution": "Tieni il peso davanti al petto. Scendi tra le anche con ginocchia in direzione dei piedi e risali spingendo sul piede intero.",
        "mistakes": [
            "Sollevare i talloni",
            "curvare il busto"
        ],
        "tip": "Adatta la larghezza dei piedi.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Bulgarian Split Squat": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Panca e manubri opzionali",
        "keywords": [
            "squat bulgaro",
            "rear foot elevated split squat",
            "affondi bulgari"
        ],
        "image": null,
        "execution": "Appoggia il piede posteriore su una panca stabile e quello anteriore a distanza comoda. Abbassa il bacino piegando le ginocchia, poi risali sul piede anteriore.",
        "mistakes": [
            "Spingere troppo con il piede dietro",
            "perdere equilibrio"
        ],
        "tip": "Inizia a corpo libero.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Affondi camminati": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Corpo libero o manubri",
        "keywords": [
            "walking lunges",
            "affondi in camminata"
        ],
        "image": null,
        "execution": "Fai un passo avanti, piega entrambe le ginocchia mantenendo il busto stabile, poi spingi sul piede davanti e avanza alternando.",
        "mistakes": [
            "Passo instabile",
            "ginocchio che cede all'interno"
        ],
        "tip": "Usa uno spazio libero.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Reverse Lunge": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Corpo libero o manubri",
        "keywords": [
            "reverse lunges",
            "affondi indietro"
        ],
        "image": null,
        "execution": "Fai un passo indietro e abbassa il bacino piegando entrambe le ginocchia. Spingi sul piede davanti per tornare in piedi.",
        "mistakes": [
            "Trasferire tutto il carico dietro",
            "perdere equilibrio"
        ],
        "tip": "Controlla l'appoggio anteriore.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Step-Up": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Box stabile",
        "keywords": [
            "step up",
            "salita su box"
        ],
        "image": null,
        "execution": "Appoggia tutto il piede su un rialzo stabile. Sali spingendo soprattutto con la gamba sul box, poi scendi controllando.",
        "mistakes": [
            "Saltare con il piede a terra",
            "box troppo alto"
        ],
        "tip": "Inizia con un rialzo basso.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Glute Bridge": {
        "muscles": "Glutei",
        "secondaryMuscles": "Femorali, core",
        "equipment": "Tappetino",
        "keywords": [
            "ponte glutei",
            "glute bridge a terra"
        ],
        "image": null,
        "execution": "Supino con ginocchia flesse e piedi a terra, solleva il bacino contraendo i glutei fino a un allineamento comodo. Abbassa lentamente.",
        "mistakes": [
            "Inarcare la zona lombare",
            "spingere solo sulle punte"
        ],
        "tip": "Mantieni le costole controllate.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Glute Bridge machine": {
        "muscles": "Glutei",
        "secondaryMuscles": "Femorali, adduttori",
        "equipment": "Macchina glute bridge",
        "keywords": [
            "glute bridge macchina",
            "glute drive machine"
        ],
        "image": null,
        "execution": "Regola supporto e cintura secondo la macchina, stabilizza i piedi. Estendi le anche fino ad allineare busto e cosce senza inarcare la schiena, poi ritorna.",
        "mistakes": [
            "Posizionare male la cintura",
            "iperestendere la schiena"
        ],
        "tip": "Verifica il sistema di sgancio prima di iniziare.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Abductor machine": {
        "muscles": "Gluteo medio e minimo",
        "secondaryMuscles": "Tensore fascia lata",
        "equipment": "Macchina abduttori",
        "keywords": [
            "hip abduction machine",
            "abductor",
            "abduttori"
        ],
        "image": null,
        "execution": "Seduto con schiena stabile, spingi le ginocchia verso l'esterno contro i cuscini. Ritorna lentamente senza lasciare cadere i pesi.",
        "mistakes": [
            "Slanciare il busto",
            "forzare l'apertura"
        ],
        "tip": "Usa un arco confortevole.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Adductor machine": {
        "muscles": "Adduttori dell'anca",
        "secondaryMuscles": "Muscoli stabilizzatori dell'anca",
        "equipment": "Macchina adduttori",
        "keywords": [
            "hip adduction machine",
            "adductor",
            "adduttori"
        ],
        "image": null,
        "execution": "Regola l'apertura iniziale in modo confortevole. Avvicina le cosce contro i cuscini, poi riaprile lentamente.",
        "mistakes": [
            "Forzare l'allungamento",
            "rimbalzare"
        ],
        "tip": "Inizia con apertura ridotta.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Cable Glute Kickback": {
        "muscles": "Gluteo massimo",
        "secondaryMuscles": "Femorali, core",
        "equipment": "Cavo basso e cavigliera",
        "keywords": [
            "glute kickback al cavo",
            "kickback glutei"
        ],
        "image": null,
        "execution": "Con cavigliera fissata e mani a un supporto stabile, porta la gamba indietro estendendo l'anca senza ruotare il bacino. Ritorna lentamente.",
        "mistakes": [
            "Inarcare la schiena",
            "slanciare la gamba"
        ],
        "tip": "Mantieni il movimento piccolo e controllato.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Smith Squat": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Adduttori, core",
        "equipment": "Multipower",
        "keywords": [
            "smith machine squat",
            "squat multipower"
        ],
        "image": null,
        "execution": "Posiziona la barra sulle spalle e i piedi in una posizione compatibile con la guida. Scendi piegando anche e ginocchia, poi risali mantenendo gli appoggi.",
        "mistakes": [
            "Posizione dei piedi incompatibile con la guida",
            "profondità forzata"
        ],
        "tip": "Imposta i fermi di sicurezza.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Stacco rumeno bilanciere": {
        "muscles": "Femorali, glutei",
        "secondaryMuscles": "Erettori spinali, presa",
        "equipment": "Bilanciere",
        "keywords": [
            "romanian deadlift",
            "rdl bilanciere",
            "stacco rumeno con bilanciere"
        ],
        "image": null,
        "execution": "Da in piedi, ginocchia leggermente flesse, arretra il bacino mantenendo la barra vicina alle gambe. Fermati prima di perdere l'assetto della colonna e risali estendendo le anche.",
        "mistakes": [
            "Allontanare la barra",
            "curvare la zona lombare"
        ],
        "tip": "Non serve raggiungere il pavimento.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Stacco da terra classico": {
        "muscles": "Glutei, quadricipiti, femorali",
        "secondaryMuscles": "Erettori spinali, presa, dorsali",
        "equipment": "Bilanciere",
        "keywords": [
            "conventional deadlift",
            "deadlift",
            "stacco da terra"
        ],
        "image": null,
        "execution": "Barra sopra il mesopiede, afferra la barra flettendo anche e ginocchia. Crea tensione nel tronco e sollevati mantenendo la barra vicina; ritorna al suolo controllando.",
        "mistakes": [
            "Strappare la barra",
            "iperestendere la schiena in alto"
        ],
        "tip": "Impara il gesto con carichi leggeri.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Seated Leg Curl": {
        "muscles": "Femorali",
        "secondaryMuscles": "Gastrocnemio",
        "equipment": "Macchina leg curl seduto",
        "keywords": [
            "leg curl seduto",
            "seated hamstring curl"
        ],
        "image": null,
        "execution": "Allinea il ginocchio al perno, regola il fermacosce e il rullo dietro la parte bassa delle gambe. Fletti le ginocchia portando i talloni indietro, poi estendile controllando.",
        "mistakes": [
            "Sollevare le cosce",
            "perdere l'appoggio lombare"
        ],
        "tip": "Regola bene i supporti.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Lying Leg Curl": {
        "muscles": "Femorali",
        "secondaryMuscles": "Gastrocnemio",
        "equipment": "Macchina leg curl sdraiato",
        "keywords": [
            "leg curl sdraiato",
            "prone leg curl",
            "lying hamstring curl"
        ],
        "image": null,
        "execution": "Sdraiati prono con ginocchia allineate al perno e rullo dietro le caviglie. Fletti le ginocchia senza sollevare il bacino, poi torna lentamente.",
        "mistakes": [
            "Inarcare la schiena",
            "sollevare il bacino"
        ],
        "tip": "Non lasciare cadere il carico.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Back Extension 45": {
        "muscles": "Glutei, femorali",
        "secondaryMuscles": "Erettori spinali",
        "equipment": "Panca iperestensioni 45 gradi",
        "keywords": [
            "hyperextension",
            "back extension 45 gradi",
            "iperestensioni"
        ],
        "image": null,
        "execution": "Regola il cuscino sotto la piega delle anche. Inclina il busto dalle anche e risali fino all'allineamento con le gambe.",
        "mistakes": [
            "Iperestendere la schiena",
            "slanciarsi"
        ],
        "tip": "Inizia senza sovraccarico.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Good Morning": {
        "muscles": "Femorali, glutei",
        "secondaryMuscles": "Erettori spinali, core",
        "equipment": "Bilanciere e rack",
        "keywords": [
            "good morning bilanciere"
        ],
        "image": null,
        "execution": "Con barra sulle spalle e ginocchia morbide, arretra il bacino inclinando il busto mantenendo la colonna controllata. Risali estendendo le anche.",
        "mistakes": [
            "Scendere oltre il controllo",
            "curvare la schiena"
        ],
        "tip": "Usa carichi leggeri e fermi.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Pull-Through al cavo": {
        "muscles": "Glutei, femorali",
        "secondaryMuscles": "Core, erettori spinali",
        "equipment": "Cavo basso e corda",
        "keywords": [
            "cable pull through",
            "pull through"
        ],
        "image": null,
        "execution": "Spalle al cavo, corda tra le gambe. Arretra il bacino mantenendo il tronco controllato e torna in piedi estendendo le anche.",
        "mistakes": [
            "Tirare con le braccia",
            "inarcare la schiena in alto"
        ],
        "tip": "Mantieni i piedi ben appoggiati.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Glute-Ham Raise": {
        "muscles": "Femorali, glutei",
        "secondaryMuscles": "Gastrocnemio, erettori spinali",
        "equipment": "Macchina GHD",
        "keywords": [
            "ghr",
            "glute ham raise"
        ],
        "image": null,
        "execution": "Regola i supporti per avere ginocchia e caviglie stabili. Abbassa il busto e risali soprattutto flettendo le ginocchia, mantenendo le anche controllate.",
        "mistakes": [
            "Iperestendere la schiena",
            "cadere in avanti"
        ],
        "tip": "Usa assistenza se non controlli la discesa.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Kettlebell Swing": {
        "muscles": "Glutei, femorali",
        "secondaryMuscles": "Core, erettori spinali, presa",
        "equipment": "Kettlebell",
        "keywords": [
            "kb swing",
            "swing kettlebell"
        ],
        "image": null,
        "execution": "Porta il kettlebell tra le cosce con un movimento d'anca. Estendi rapidamente le anche per farlo oscillare fino a un'altezza controllata, poi assorbi il ritorno arretrando il bacino.",
        "mistakes": [
            "Sollevare con le braccia",
            "inarcare la schiena"
        ],
        "tip": "Impara prima il movimento d'anca.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Standing Calf Raise": {
        "muscles": "Gastrocnemio, soleo",
        "secondaryMuscles": "Stabilizzatori della caviglia",
        "equipment": "Macchina calf in piedi",
        "keywords": [
            "calf raise in piedi",
            "standing calf machine"
        ],
        "image": null,
        "execution": "Con avampiedi sulla pedana e spalle sotto i supporti, solleva i talloni mantenendo le ginocchia quasi estese. Abbassa lentamente.",
        "mistakes": [
            "Rimbalzare",
            "ruotare le caviglie"
        ],
        "tip": "Usa un arco confortevole.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Seated Calf Raise": {
        "muscles": "Soleo",
        "secondaryMuscles": "Gastrocnemio",
        "equipment": "Macchina calf seduto",
        "keywords": [
            "calf raise seduto",
            "seated calf machine"
        ],
        "image": null,
        "execution": "Seduto con cuscini sulle cosce e avampiedi sulla pedana, solleva i talloni e abbassali lentamente senza muovere le ginocchia.",
        "mistakes": [
            "Rimbalzare",
            "perdere l'appoggio dell'avampiede"
        ],
        "tip": "Controlla il ritorno.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Calf Press su Leg Press": {
        "muscles": "Gastrocnemio, soleo",
        "secondaryMuscles": "Stabilizzatori della caviglia",
        "equipment": "Leg press",
        "keywords": [
            "calf press leg press",
            "polpacci alla pressa"
        ],
        "image": null,
        "execution": "Solo su una macchina adatta, posiziona gli avampiedi in modo sicuro sulla pedana con ginocchia quasi estese. Spingi con le caviglie e torna lentamente.",
        "mistakes": [
            "Piedi che scivolano",
            "muovere le ginocchia"
        ],
        "tip": "Mantieni attivi i dispositivi di sicurezza.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Single-Leg Calf Raise": {
        "muscles": "Gastrocnemio, soleo",
        "secondaryMuscles": "Stabilizzatori della caviglia",
        "equipment": "Rialzo stabile e supporto",
        "keywords": [
            "single leg calf raise",
            "calf monopodalico"
        ],
        "image": null,
        "execution": "Su un piede, con una mano su un supporto, solleva il tallone e abbassalo controllando. Ripeti dall'altro lato.",
        "mistakes": [
            "Inclinare la caviglia",
            "rimbalzare"
        ],
        "tip": "Inizia su pavimento piano.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Cable Crunch": {
        "muscles": "Retto addominale",
        "secondaryMuscles": "Obliqui",
        "equipment": "Cavo alto e corda",
        "keywords": [
            "crunch al cavo",
            "kneeling cable crunch"
        ],
        "image": null,
        "execution": "In ginocchio con corda ai lati della testa, avvicina le costole al bacino flettendo il tronco. Ritorna lentamente senza tirare con le braccia.",
        "mistakes": [
            "Muovere solo le anche",
            "tirare il collo"
        ],
        "tip": "Espira durante la flessione.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Plank": {
        "muscles": "Addominali, obliqui",
        "secondaryMuscles": "Glutei, spalle",
        "equipment": "Tappetino",
        "keywords": [
            "forearm plank",
            "plank a terra"
        ],
        "image": null,
        "execution": "Appoggia gli avambracci sotto le spalle e le punte dei piedi. Mantieni testa, tronco e bacino allineati respirando regolarmente.",
        "mistakes": [
            "Lasciare cadere il bacino",
            "trattenere il respiro"
        ],
        "tip": "Interrompi quando perdi l'allineamento.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Side Plank": {
        "muscles": "Obliqui",
        "secondaryMuscles": "Gluteo medio, spalla",
        "equipment": "Tappetino",
        "keywords": [
            "plank laterale",
            "side bridge"
        ],
        "image": null,
        "execution": "Sul fianco appoggia il gomito sotto la spalla, solleva il bacino mantenendo il corpo in linea e respira. Ripeti dall'altro lato.",
        "mistakes": [
            "Ruotare il busto",
            "cedere sulla spalla"
        ],
        "tip": "Puoi partire con ginocchia piegate.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Hanging Knee Raise": {
        "muscles": "Addominali, flessori dell'anca",
        "secondaryMuscles": "Presa, stabilizzatori scapolari",
        "equipment": "Sbarra o supporto gomiti",
        "keywords": [
            "sollevamento ginocchia sospeso",
            "hanging knee raises"
        ],
        "image": null,
        "execution": "In sospensione stabile, solleva le ginocchia piegate e avvicina il bacino alle costole senza oscillare. Abbassa lentamente.",
        "mistakes": [
            "Dondolare",
            "inarcare la zona lombare"
        ],
        "tip": "Usa il supporto gomiti se la presa limita.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Hanging Leg Raise": {
        "muscles": "Addominali, flessori dell'anca",
        "secondaryMuscles": "Presa, stabilizzatori scapolari",
        "equipment": "Sbarra",
        "keywords": [
            "sollevamento gambe sospeso",
            "hanging leg raises"
        ],
        "image": null,
        "execution": "In sospensione stabile solleva le gambe quasi distese con controllo del bacino, poi abbassale senza oscillare.",
        "mistakes": [
            "Slanciare le gambe",
            "forzare l'ampiezza"
        ],
        "tip": "Passa alle ginocchia piegate se necessario.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Ab Wheel Rollout": {
        "muscles": "Addominali, obliqui",
        "secondaryMuscles": "Dorsali, spalle",
        "equipment": "Ruota addominale",
        "keywords": [
            "ab roller",
            "rollout ruota"
        ],
        "image": null,
        "execution": "In ginocchio con ruota sotto le spalle, fai scorrere la ruota avanti mantenendo il controllo del tronco. Torna prima che la schiena si inarchi.",
        "mistakes": [
            "Cedere con la zona lombare",
            "estendersi troppo"
        ],
        "tip": "Limita inizialmente la distanza.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Reverse Crunch": {
        "muscles": "Retto addominale",
        "secondaryMuscles": "Obliqui",
        "equipment": "Tappetino",
        "keywords": [
            "crunch inverso",
            "reverse crunches"
        ],
        "image": null,
        "execution": "Supino con anche e ginocchia flesse, solleva leggermente il bacino avvicinandolo alle costole. Abbassalo senza slanciare le gambe.",
        "mistakes": [
            "Usare lo slancio",
            "sollevare troppo la schiena"
        ],
        "tip": "Movimento breve e controllato.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Russian Twist": {
        "muscles": "Obliqui",
        "secondaryMuscles": "Retto addominale",
        "equipment": "Tappetino, peso opzionale",
        "keywords": [
            "torsioni russe",
            "russian twists"
        ],
        "image": null,
        "execution": "Seduto con piedi appoggiati e tronco leggermente inclinato, ruota il torace a destra e sinistra in un arco comodo senza perdere l'assetto.",
        "mistakes": [
            "Curvare eccessivamente la schiena",
            "ruotare di scatto"
        ],
        "tip": "Inizia senza peso.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Cable Wood Chop": {
        "muscles": "Obliqui",
        "secondaryMuscles": "Spalle, glutei",
        "equipment": "Cavo",
        "keywords": [
            "woodchop",
            "wood chop al cavo"
        ],
        "image": null,
        "execution": "Posizionati lateralmente al cavo, afferra la maniglia con due mani e muovila in diagonale attraverso il corpo, coordinando anche e tronco. Torna controllando.",
        "mistakes": [
            "Forzare la torsione lombare",
            "tirare solo con le braccia"
        ],
        "tip": "Lascia ruotare i piedi se necessario.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Bird Dog": {
        "muscles": "Core, erettori spinali",
        "secondaryMuscles": "Glutei, spalle",
        "equipment": "Tappetino",
        "keywords": [
            "bird dog exercise",
            "quadrupedia alternata"
        ],
        "image": null,
        "execution": "In quadrupedia estendi un braccio e la gamba opposta mantenendo il bacino orizzontale. Ritorna e alterna.",
        "mistakes": [
            "Inarcare la schiena",
            "ruotare il bacino"
        ],
        "tip": "Allunga senza cercare altezza.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Farmer's Walk": {
        "muscles": "Presa, trapezio, core",
        "secondaryMuscles": "Glutei, gambe",
        "equipment": "Manubri o kettlebell",
        "keywords": [
            "farmer walk",
            "farmers carry",
            "camminata del contadino"
        ],
        "image": null,
        "execution": "Solleva due pesi con tecnica controllata e cammina con tronco stabile, passi regolari e braccia ai fianchi. Appoggiali in sicurezza.",
        "mistakes": [
            "Inclinarsi di lato",
            "passi affrettati"
        ],
        "tip": "Usa un percorso libero.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Sled Push": {
        "muscles": "Quadricipiti, glutei",
        "secondaryMuscles": "Polpacci, core, spalle",
        "equipment": "Slitta",
        "keywords": [
            "prowler push",
            "spinta slitta"
        ],
        "image": null,
        "execution": "Afferra le maniglie, inclina il corpo mantenendo il tronco stabile e spingi la slitta con passi controllati.",
        "mistakes": [
            "Curvare la schiena",
            "perdere aderenza"
        ],
        "tip": "Adatta il carico alla superficie.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Battle Ropes": {
        "muscles": "Spalle, braccia",
        "secondaryMuscles": "Core, gambe",
        "equipment": "Corde da allenamento",
        "keywords": [
            "battle ropes alternating waves",
            "corde ondulatorie"
        ],
        "image": null,
        "execution": "Con piedi stabili e ginocchia morbide, alterna rapide onde delle braccia mantenendo il tronco controllato.",
        "mistakes": [
            "Inarcare la schiena",
            "sollevare le spalle"
        ],
        "tip": "Usa intervalli brevi con tecnica stabile.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Medicine Ball Slam": {
        "muscles": "Dorsali, addominali",
        "secondaryMuscles": "Spalle, gambe",
        "equipment": "Slam ball",
        "keywords": [
            "ball slam",
            "slam palla medica"
        ],
        "image": null,
        "execution": "Solleva una palla adatta allo slam sopra la testa e lanciala verso il pavimento coordinando tronco e anche. Recuperala con controllo.",
        "mistakes": [
            "Usare palla non adatta",
            "inarcare la schiena"
        ],
        "tip": "Verifica spazio e rimbalzo.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Landmine Press": {
        "muscles": "Deltoidi, pettorali superiori",
        "secondaryMuscles": "Tricipiti, core",
        "equipment": "Bilanciere con attacco landmine",
        "keywords": [
            "one arm landmine press",
            "landmine press unilaterale"
        ],
        "image": null,
        "execution": "Con barra fissata a un'estremità, tieni l'altra vicino alla spalla e spingi in avanti e in alto lungo l'arco naturale. Torna controllando.",
        "mistakes": [
            "Ruotare il tronco",
            "inarcare la schiena"
        ],
        "tip": "Verifica l'ancoraggio.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Landmine Row": {
        "muscles": "Dorsali, romboidi",
        "secondaryMuscles": "Bicipiti, core",
        "equipment": "Bilanciere landmine",
        "keywords": [
            "landmine row",
            "rematore landmine"
        ],
        "image": null,
        "execution": "Con barra ancorata, inclina il busto dalle anche e tira l'estremità verso il tronco. Abbassa senza modificare l'assetto.",
        "mistakes": [
            "Strappare il carico",
            "ruotare il tronco"
        ],
        "tip": "Mantieni stabile l'ancoraggio.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "TRX Row": {
        "muscles": "Dorsali, romboidi",
        "secondaryMuscles": "Bicipiti, core",
        "equipment": "Cinghie in sospensione",
        "keywords": [
            "suspension row",
            "rematore trx"
        ],
        "image": null,
        "execution": "Afferra le maniglie, inclina il corpo indietro mantenendolo in linea. Tira il petto verso le maniglie e torna lentamente.",
        "mistakes": [
            "Bacino che cede",
            "sollevare le spalle"
        ],
        "tip": "Riduci l'inclinazione per facilitare.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "TRX Push-Up": {
        "muscles": "Pettorali, tricipiti",
        "secondaryMuscles": "Deltoidi anteriori, core",
        "equipment": "Cinghie in sospensione",
        "keywords": [
            "suspension push up",
            "push up trx"
        ],
        "image": null,
        "execution": "Con mani nelle maniglie e corpo inclinato in avanti, piega i gomiti portando il torace tra le mani, poi spingi mantenendo il tronco stabile.",
        "mistakes": [
            "Perdere controllo delle cinghie",
            "inarcare la schiena"
        ],
        "tip": "Inizia con inclinazione ridotta.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Air Bike": {
        "muscles": "Gambe, spalle, braccia",
        "secondaryMuscles": "Core",
        "equipment": "Air bike",
        "keywords": [
            "assault bike",
            "air bike sprint"
        ],
        "image": null,
        "execution": "Regola il sedile, pedala e coordina la spinta e trazione delle maniglie. Aumenta la velocità gradualmente mantenendo il controllo.",
        "mistakes": [
            "Partire al massimo senza riscaldamento",
            "sedile mal regolato"
        ],
        "tip": "Registra durata e intensità nella sezione cardio.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
    },
    "Treadmill Incline Walk": {
        "muscles": "Glutei, quadricipiti, polpacci",
        "secondaryMuscles": "Femorali, core",
        "equipment": "Tapis roulant",
        "keywords": [
            "incline walk",
            "camminata in salita",
            "camminata tapis roulant"
        ],
        "image": null,
        "execution": "Imposta velocità e pendenza gestibili, cammina con passi naturali e busto stabile. Riduci progressivamente prima di scendere.",
        "mistakes": [
            "Aggrapparsi continuamente",
            "pendenza eccessiva"
        ],
        "tip": "Usa la clip di sicurezza e registra il cardio.",
        "breathing": "Respira regolarmente; espira nella fase di maggiore sforzo, inspira nel ritorno. Per carichi elevati usa una tecnica di stabilizzazione adeguata con istruttore.",
        "reviewStatus": "draft"
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
    const baseRoutine = gymData.routines?.[routineKey] ? { name: "Scheda " + routineKey + " personalizzata", description: "Allenamento personalizzato", tip: "" } : defaultRoutines[routineKey];
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
                restSeconds: exercise.restSeconds || DEFAULT_REST_SECONDS,
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
        name: ex.name, muscles: ex.muscles, sets: ex.sets.length, reps: ex.targetReps || "10-12", restSeconds: ex.restSeconds || DEFAULT_REST_SECONDS
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
                    startRestTimer(exercise.restSeconds || DEFAULT_REST_SECONDS);
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
            name: ex.name, muscles: ex.muscles, sets: ex.sets.length, reps: ex.targetReps || "10-12", restSeconds: ex.restSeconds || DEFAULT_REST_SECONDS
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
        name: gymData.routines?.[currentRoutine] ? "Scheda " + currentRoutine + " personalizzata" : defaultRoutines[currentRoutine].name,
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