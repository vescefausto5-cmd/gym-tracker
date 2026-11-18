
/* =====================================
   GYM TRACKER - APP PRINCIPALE
   Versione 2.0
===================================== */

/* =====================================
   DATABASE
===================================== */

const GymDB = {
    key: "gymTrackerData",

    initialData: {
        profile: {
            weight: 117,
            height: 181,
            age: 25
        },
        workouts: [],
        bodyWeight: [],
        cardio: [],
        routines: {
            A: [],
            B: [],
            C: []
        }
    },

    getData() {
        try {
            const saved = localStorage.getItem(this.key);

            if (!saved) {
                return JSON.parse(JSON.stringify(this.initialData));
            }

            const data = JSON.parse(saved);

            return {
                ...JSON.parse(JSON.stringify(this.initialData)),
                ...data,
                profile: {
                    ...this.initialData.profile,
                    ...(data.profile || {})
                },
                workouts: Array.isArray(data.workouts) ? data.workouts : [],
                bodyWeight: Array.isArray(data.bodyWeight) ? data.bodyWeight : [],
                cardio: Array.isArray(data.cardio) ? data.cardio : [],
                routines: {
                    ...this.initialData.routines,
                    ...(data.routines || {})
                }
            };
        } catch (error) {
            console.error("Errore lettura database:", error);
            return JSON.parse(JSON.stringify(this.initialData));
        }
    },

    saveData(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
};

let gymData = GymDB.getData();

function saveGymData() {
    GymDB.saveData(gymData);
}

function saveWorkout(workout) {
    gymData.workouts.push(workout);
    saveGymData();
}

function saveBodyWeight(entry) {
    gymData.bodyWeight.push(entry);
    gymData.profile.weight = entry.weight;
    saveGymData();
}

function saveCardio(entry) {
    gymData.cardio.push(entry);
    saveGymData();
}

/* =====================================
   TEMI PERSONALIZZABILI
===================================== */

const ThemeManager = {
    key: "gymTrackerTheme",

    init() {
        const savedTheme = localStorage.getItem(this.key) || "green";
        this.set(savedTheme);

        document.querySelectorAll(".theme-choice").forEach(button => {
            button.addEventListener("click", () => {
                this.set(button.dataset.theme);
            });
        });
    },

    set(theme) {
        const allowedThemes = ["green", "red", "purple", "blue"];

        if (!allowedThemes.includes(theme)) {
            theme = "green";
        }

        document.documentElement.dataset.theme = theme;
        localStorage.setItem(this.key, theme);

        document.querySelectorAll(".theme-choice").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.theme === theme
            );
        });

        updateCharts();
    }
};

/* =====================================
   SCHEDE DI ALLENAMENTO
===================================== */

const routines = {
    A: {
        name: "Full Body A",
        description: "Allenamento completo A",
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
        description: "Allenamento completo B",
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
        description: "Allenamento completo C",
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

/* =====================================
   STATO ALLENAMENTO
===================================== */

let currentRoutine = "A";
let currentWorkout = [];
let restInterval = null;
let restSeconds = 90;

/* =====================================
   ULTIMO CARICO UTILIZZATO
===================================== */

function getLastSet(exerciseName) {
    for (let i = gymData.workouts.length - 1; i >= 0; i--) {
        const workout = gymData.workouts[i];

        const exercise = workout.exercises?.find(
            item => item.name === exerciseName
        );

        if (exercise && Array.isArray(exercise.sets)) {
            const completedSet = [...exercise.sets]
                .reverse()
                .find(set => set.completed);

            if (completedSet) return completedSet;
        }
    }

    return null;
}

/* =====================================
   GENERAZIONE SCHEDE
===================================== */

function renderRoutine(routineKey) {
    if (!routines[routineKey]) return;

    currentRoutine = routineKey;

    const routine = routines[routineKey];

    currentWorkout = routine.exercises.map(exercise => ({
        name: exercise.name,
        muscles: exercise.muscles,
        sets: Array.from({ length: exercise.sets }, () => ({
            kg: "",
            reps: "",
            completed: false
        }))
    }));

    document.querySelectorAll(".routine-button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.routine === routineKey
        );
    });

    const summary = document.getElementById("routine-summary");

    if (summary) {
        summary.innerHTML = `
            <h3>${routine.name}</h3>
            <p>${routine.description}</p>
            <p>${routine.exercises.length} esercizi programmati</p>
        `;
    }

    renderExercises();
}

/* =====================================
   VISUALIZZAZIONE ESERCIZI
===================================== */

function renderExercises() {
    const container = document.getElementById("exercise-list");

    if (!container) return;

    container.innerHTML = "";

    currentWorkout.forEach(exercise => {
        const lastSet = getLastSet(exercise.name);

        const card = document.createElement("div");
        card.className = "exercise-card";

        const header = document.createElement("div");
        header.className = "exercise-header";

        header.innerHTML = `
            <div>
                <h3>${exercise.name}</h3>
                <p>${exercise.muscles}</p>
                <p>Ultimo carico: ${
                    lastSet
                        ? `${lastSet.kg} kg × ${lastSet.reps}`
                        : "Nessun dato precedente"
                }</p>
            </div>
            <span class="exercise-tag">${exercise.sets.length} serie</span>
        `;

        card.appendChild(header);

        exercise.sets.forEach((set, setIndex) => {
            const row = document.createElement("div");
            row.className = "set-row";

            if (set.completed) row.classList.add("completed");

            const number = document.createElement("span");
            number.className = "set-number";
            number.textContent = `S${setIndex + 1}`;

            const kg = document.createElement("input");
            kg.type = "number";
            kg.min = "0";
            kg.step = "0.5";
            kg.placeholder = "Kg";
            kg.value = set.kg;

            const reps = document.createElement("input");
            reps.type = "number";
            reps.min = "0";
            reps.step = "1";
            reps.placeholder = "Rip.";
            reps.value = set.reps;

            kg.addEventListener("input", () => {
                set.kg = kg.value;
            });

            reps.addEventListener("input", () => {
                set.reps = reps.value;
            });

            const complete = document.createElement("button");
            complete.type = "button";
            complete.textContent = set.completed ? "✓" : "○";

            complete.addEventListener("click", () => {
                if (!set.completed) {
                    if (set.kg === "" || set.reps === "") {
                        alert("Inserisci kg e ripetizioni prima di completare la serie.");
                        return;
                    }

                    set.completed = true;
                    renderExercises();
                    startRestTimer();

                } else {
                    set.completed = false;
                    clearInterval(restInterval);
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

/* =====================================
   RIEPILOGO ALLENAMENTO
===================================== */

function updateSummary() {
    const totalExercises = currentWorkout.length;

    const totalSets = currentWorkout.reduce(
        (total, exercise) => total + exercise.sets.length,
        0
    );

    const completedSets = currentWorkout.reduce(
        (total, exercise) =>
            total + exercise.sets.filter(set => set.completed).length,
        0
    );

    const percentage = totalSets
        ? Math.round((completedSets / totalSets) * 100)
        : 0;

    const summary = document.getElementById("routine-summary");

    if (summary) {
        const progress = summary.querySelector(".routine-progress");

        if (progress) {
            progress.textContent =
                `${completedSets} di ${totalSets} serie completate · ${percentage}%`;
        } else {
            const progressText = document.createElement("p");
            progressText.className = "routine-progress";
            progressText.textContent =
                `${completedSets} di ${totalSets} serie completate · ${percentage}%`;
            summary.appendChild(progressText);
        }
    }
}

/* =====================================
   TIMER RECUPERO
===================================== */

function startRestTimer() {
    clearInterval(restInterval);

    let remaining = restSeconds;

    showTimer(remaining);

    restInterval = setInterval(() => {
        remaining--;
        showTimer(remaining);

        if (remaining <= 0) {
            clearInterval(restInterval);
            showTimerFinished();
        }
    }, 1000);
}

function showTimer(seconds) {
    let timer = document.getElementById("rest-timer");

    if (!timer) {
        timer = document.createElement("div");
        timer.id = "rest-timer";
        timer.className = "rest-timer";
        document.querySelector("main").appendChild(timer);
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    timer.textContent =
        `⏱ Recupero: ${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function showTimerFinished() {
    const timer = document.getElementById("rest-timer");

    if (timer) {
        timer.textContent = "✅ Recupero terminato!";
    }
}

/* =====================================
   TERMINA ALLENAMENTO
===================================== */

function finishWorkout() {
    const completedSets = currentWorkout.reduce(
        (total, exercise) =>
            total + exercise.sets.filter(set => set.completed).length,
        0
    );

    if (completedSets === 0) {
        alert("Completa almeno una serie prima di terminare.");
        return;
    }

    const workout = {
        date: new Date().toISOString(),
        routine: currentRoutine,
        name: routines[currentRoutine].name,
        exercises: JSON.parse(JSON.stringify(currentWorkout))
    };

    saveWorkout(workout);

    clearInterval(restInterval);

    const timer = document.getElementById("rest-timer");
    if (timer) timer.remove();

    alert(
        `Allenamento ${currentRoutine} salvato!\n` +
        `Serie completate: ${completedSets}`
    );

    renderRoutine(currentRoutine);
    renderProgress();
    renderHistory();
}

/* =====================================
   STORICO ALLENAMENTI
===================================== */

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

        const dateText = date.toLocaleDateString("it-IT", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        });

        const timeText = date.toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit"
        });

        const exercises = Array.isArray(workout.exercises)
            ? workout.exercises
            : [];

        const completedSets = exercises.reduce(
            (total, exercise) =>
                total + (exercise.sets || []).filter(set => set.completed).length,
            0
        );

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
            const completed = (exercise.sets || []).filter(set => set.completed);

            if (completed.length === 0) return;

            const exerciseElement = document.createElement("div");
            exerciseElement.className = "history-exercise";

            const exerciseTitle = document.createElement("strong");
            exerciseTitle.textContent = exercise.name;

            const setsText = document.createElement("p");
            setsText.textContent = completed.map(
                (set, index) =>
                    `Serie ${index + 1}: ${set.kg} kg × ${set.reps}`
            ).join(" | ");

            exerciseElement.append(exerciseTitle, setsText);
            details.appendChild(exerciseElement);
        });

        card.append(header, summary, details);
        container.appendChild(card);
    });
}

/* =====================================
   REGISTRAZIONE CARDIO
===================================== */

function setupCardio() {
    const button = document.getElementById("save-cardio");

    if (!button) return;

    button.addEventListener("click", () => {
        const duration = Number(
            document.getElementById("cardio-duration").value
        );

        const speed = Number(
            document.getElementById("cardio-speed").value
        );

        const incline = Number(
            document.getElementById("cardio-incline").value
        );

        if (!duration || duration <= 0) {
            alert("Inserisci una durata valida.");
            return;
        }

        if (speed < 0 || incline < 0) {
            alert("Velocità e inclinazione non possono essere negative.");
            return;
        }

        saveCardio({
            date: new Date().toISOString(),
            duration,
            speed,
            incline
        });

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

        const date = new Date(session.date);
        const dateText = date.toLocaleDateString("it-IT");

        const title = document.createElement("h3");
        title.textContent = `${session.duration} minuti di cardio`;

        const details = document.createElement("p");
        details.textContent =
            `${dateText} · ${session.speed ?? 0} km/h · Inclinazione ${session.incline ?? 0}%`;

        card.append(title, details);
        container.appendChild(card);
    });
}

/* =====================================
   REGISTRAZIONE PESO CORPOREO
===================================== */

function setupBodyWeight() {
    const button = document.getElementById("save-weight");

    if (!button) return;

    button.addEventListener("click", () => {
        const input = document.getElementById("body-weight");
        const weight = Number(input.value);

        if (!weight || weight <= 0 || weight > 500) {
            alert("Inserisci un peso valido.");
            return;
        }

        saveBodyWeight({
            date: new Date().toISOString(),
            weight
        });

        input.value = "";

        renderProgress();

        alert("Peso corporeo registrato!");
    });
}

/* =====================================
   STATISTICHE PROGRESSI
===================================== */

function getCompletedSetCount() {
    return gymData.workouts.reduce((total, workout) => {
        return total + (workout.exercises || []).reduce(
            (exerciseTotal, exercise) => {
                return exerciseTotal +
                    (exercise.sets || []).filter(set => set.completed).length;
            },
            0
        );
    }, 0);
}

function getLatestWeight() {
    if (gymData.bodyWeight.length > 0) {
        return gymData.bodyWeight[gymData.bodyWeight.length - 1].weight;
    }

    return gymData.profile.weight;
}

function renderProgress() {
    const workoutStat = document.getElementById("stat-workouts");
    const setStat = document.getElementById("stat-sets");
    const cardioStat = document.getElementById("stat-cardio");
    const weightStat = document.getElementById("stat-weight");

    if (workoutStat) {
        workoutStat.textContent = gymData.workouts.length;
    }

    if (setStat) {
        setStat.textContent = getCompletedSetCount();
    }

    if (cardioStat) {
        cardioStat.textContent = gymData.cardio.length;
    }

    if (weightStat) {
        weightStat.textContent = `${getLatestWeight()} kg`;
    }

    renderLastWorkout();
    updateCharts();
}

function renderLastWorkout() {
    const container = document.getElementById("progress-last-workout");

    if (!container) return;

    container.innerHTML = "";

    const workout = gymData.workouts[gymData.workouts.length - 1];

    if (!workout) {
        container.textContent = "Completa il tuo primo allenamento per vedere qui i tuoi risultati.";
        return;
    }

    const date = new Date(workout.date);

    const title = document.createElement("h3");
    title.textContent = workout.name || `Full Body ${workout.routine}`;

    const details = document.createElement("p");
    details.textContent =
        `${date.toLocaleDateString("it-IT")} · ${getCompletedSetCountForWorkout(workout)} serie completate`;

    container.append(title, details);
}

function getCompletedSetCountForWorkout(workout) {
    return (workout.exercises || []).reduce(
        (total, exercise) =>
            total + (exercise.sets || []).filter(set => set.completed).length,
        0
    );
}

/* =====================================
   GRAFICI
===================================== */

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

    if (!entries.length) {
        if (empty) empty.style.display = "grid";
        return;
    }

    if (empty) empty.style.display = "none";

    const colors = getChartColors();
    const padding = { top: 22, right: 20, bottom: 35, left: 42 };

    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const values = entries.map(entry => Number(entry[valueKey]));
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const range = maxValue - minValue || Math.max(maxValue * 0.1, 1);
    const low = Math.max(0, minValue - range * 0.25);
    const high = maxValue + range * 0.25;

    const x = index => {
        if (entries.length === 1) return padding.left + chartWidth / 2;
        return padding.left + (index / (entries.length - 1)) * chartWidth;
    };

    const y = value => {
        return padding.top +
            chartHeight -
            ((value - low) / (high - low)) * chartHeight;
    };

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
    ctx.font = "10px Segoe UI, Arial";

    ctx.textAlign = "right";

    for (let i = 0; i <= 3; i++) {
        const value = high - ((high - low) / 3) * i;
        const label = Number.isInteger(value)
            ? value.toString()
            : value.toFixed(1);

        ctx.fillText(label + suffix, padding.left - 7,
            padding.top + (chartHeight / 3) * i + 3);
    }

    ctx.beginPath();

    entries.forEach((entry, index) => {
        const pointX = x(index);
        const pointY = y(Number(entry[valueKey]));

        if (index === 0) {
            ctx.moveTo(pointX, pointY);
        } else {
            ctx.lineTo(pointX, pointY);
        }
    });

    ctx.strokeStyle = colors.accent;
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    entries.forEach((entry, index) => {
        const pointX = x(index);
        const pointY = y(Number(entry[valueKey]));

        ctx.beginPath();
        ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
        ctx.fillStyle = colors.accent;
        ctx.fill();
        ctx.strokeStyle = getComputedStyle(document.documentElement)
            .getPropertyValue("--surface").trim() || "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    ctx.fillStyle = colors.text;
    ctx.textAlign = "center";

    const labelIndexes = entries.length <= 5
        ? entries.map((_, index) => index)
        : [0, Math.floor((entries.length - 1) / 2), entries.length - 1];

    [...new Set(labelIndexes)].forEach(index => {
        const date = new Date(entries[index].date);
        const label = date.toLocaleDateString("it-IT", {
            day: "2-digit",
            month: "2-digit"
        });

        ctx.fillText(label, x(index), height - 10);
    });
}

function updateCharts() {
    const weights = gymData.bodyWeight.slice(-20);
    const cardio = gymData.cardio.slice(-20);

    drawLineChart(
        "weight-chart",
        "weight-empty",
        weights,
        "weight",
        " kg"
    );

    drawLineChart(
        "cardio-chart",
        "cardio-empty",
        cardio,
        "duration",
        " min"
    );
}

/* =====================================
   NAVIGAZIONE
===================================== */

function setupNavigation() {
    document.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".nav-button").forEach(item => {
                item.classList.remove("active");
            });

            document.querySelectorAll(".app-section").forEach(section => {
                section.classList.remove("active");
            });

            button.classList.add("active");

            const section = document.getElementById(button.dataset.section);

            if (!section) return;

            section.classList.add("active");

            if (button.dataset.section === "history") {
                renderHistory();
            }

            if (button.dataset.section === "progress") {
                renderProgress();
            }

            if (button.dataset.section === "cardio") {
                renderCardioHistory();
            }
        });
    });
}

/* =====================================
   BACKUP
===================================== */

function exportGymBackup() {
    const backup = JSON.stringify(gymData, null, 2);
    const blob = new Blob([backup], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "gym-tracker-backup.json";
    link.click();

    URL.revokeObjectURL(url);
}

function importGymBackup(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            const imported = JSON.parse(event.target.result);

            if (
                !imported ||
                !Array.isArray(imported.workouts) ||
                !imported.profile
            ) {
                throw new Error("Backup non valido");
            }

            gymData = {
                ...JSON.parse(JSON.stringify(GymDB.initialData)),
                ...imported,
                profile: {
                    ...GymDB.initialData.profile,
                    ...(imported.profile || {})
                },
                workouts: Array.isArray(imported.workouts) ? imported.workouts : [],
                bodyWeight: Array.isArray(imported.bodyWeight) ? imported.bodyWeight : [],
                cardio: Array.isArray(imported.cardio) ? imported.cardio : [],
                routines: {
                    ...GymDB.initialData.routines,
                    ...(imported.routines || {})
                }
            };

            saveGymData();
            location.reload();

        } catch (error) {
            alert("Impossibile importare il backup.");
            console.error(error);
        }
    };

    reader.readAsText(file);
}

/* =====================================
   AVVIO APPLICAZIONE
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    ThemeManager.init();

    setupNavigation();
    setupCardio();
    setupBodyWeight();

    document.querySelectorAll(".routine-button").forEach(button => {
        button.addEventListener("click", () => {
            renderRoutine(button.dataset.routine);
        });
    });

    const finishButton = document.getElementById("finish-workout");

    if (finishButton) {
        finishButton.addEventListener("click", finishWorkout);
    }

    renderRoutine("A");
    renderHistory();
    renderCardioHistory();
    renderProgress();

    window.addEventListener("resize", updateCharts);

    console.log("Gym Tracker versione 2.0 pronta!", gymData);
});
