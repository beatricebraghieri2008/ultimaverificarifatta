let audioCorrente = null;

let canzone1 = {
    Titolo: "No Love",
    Immagine_disco: "immagini/nolove.jpg",
    Informazioni: "singolo del rapper Eminem, pubblicato come terzo estratto dal settimo album Recovery.Al brano partecipa Lil Wayne, che ne è coautore.Fu pubblicato come singolo il 5 ottobre 2010.Per la produzione venne utilizzato un campionamento della hit anni novanta di Haddaway What is Love. Il 28 febbraio 2018 RIAA lo certificò singolo multiplatino, avendo venduto oltre quattro milioni di copie sul mercato statunitense",
    Audio: "audio_canzoni/Eminem - No Love (Lyrics) ft. Lil Wayne.mp3",
    Link: "https://www.youtube.com/watch?v=KV2ssT8lzj8"
};

let canzone2 = {
    Titolo: "Power",
    Immagine_disco: "immagini/power.jpg",
    Informazioni: "La canzone utilizza un campionamento di 21st Century Schizoid Man del gruppo musicale di rock progressivo britannico King Crimson e di Afromerica dei Continent n° 6. Nel testo, West rivolge i propri commenti agli Stati Uniti e ai suoi critici. Il coro della canzone è dotato di un riff vocale abrasivo.E' il singolo di ritorno sulle scene di Kanye dopo il suo 808s & Heartbreak e l'incidente molto controverso agli MTV Video Music Awards del 2009. La canzone ha ricevuto il plauso della critica musicale ed è stato elencato tra i migliori brani del 2010 da numerose pubblicazioni. I critici lo descrissero come un ritorno in forma per West, lodando la sua produzione intricata, il suo testo di valore, e il tema. La canzone è stata nominata per la migliore interpretazione rap solista ai Grammy Awards del 2011.",
    Audio: "audio_canzoni/POWER.mp3",
    Link: "https://www.youtube.com/watch?v=L53gjP-TtGE"
};

let canzone3 = {
    Titolo: "Tell Me",
    Immagine_disco: "immagini/tellme.jpg",
    Informazioni: "La canzone fa parte dell'album 2093, il quarto album in studio del rapper, pubblicato il 16 febbraio 2024. Sono state rese disponibili anche due ristampe con tracce bonus al loro interno. Inoltre l'album vede collaborazioni di altri rapper molto conosciuti come Lil Wayne e Future.",
    Audio: "audio_canzoni/Tell më [Official Audio].mp3",
    Link: "https://www.youtube.com/watch?v=4_GS2_YN5AA"
};

document.getElementById("canzone1").innerText = canzone1.Titolo;
document.getElementById("canzone2").innerText = canzone2.Titolo;
document.getElementById("canzone3").innerText = canzone3.Titolo;

document.getElementById("immagine1").src = canzone1.Immagine_disco;
document.getElementById("immagine2").src = canzone2.Immagine_disco;
document.getElementById("immagine3").src = canzone3.Immagine_disco;

document.getElementById("info1").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni1");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone1.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

document.getElementById("info2").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni2");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone2.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

document.getElementById("info3").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni3");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone3.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

// Funzione per fermare l'audio
function stopAudio() {
    if (audioCorrente !== null) {
        audioCorrente.pause();
        audioCorrente.currentTime = 0;
    }
}

// Funzione di riproduzione per la canzone 1
function riproduci1() {
    stopAudio(); // Ferma qualsiasi audio in corso
    audioCorrente = new Audio(canzone1.Audio); // Crea un nuovo oggetto audio
    audioCorrente.play(); // Avvia la riproduzione
    document.getElementById("play1").innerText = "Pause"; // Cambia il testo del pulsante a "Pause"
}

// Funzione di riproduzione per la canzone 2
function riproduci2() {
    stopAudio(); // Ferma qualsiasi audio in corso
    audioCorrente = new Audio(canzone2.Audio); // Crea un nuovo oggetto audio
    audioCorrente.play(); // Avvia la riproduzione
    document.getElementById("play2").innerText = "Pause"; // Cambia il testo del pulsante a "Pause"
}

// Funzione di riproduzione per la canzone 3
function riproduci3() {
    stopAudio(); // Ferma qualsiasi audio in corso
    audioCorrente = new Audio(canzone3.Audio); // Crea un nuovo oggetto audio
    audioCorrente.play(); // Avvia la riproduzione
    document.getElementById("play3").innerText = "Pause"; // Cambia il testo del pulsante a "Pause"
}


// Funzione di riproduzione per la canzone 1
document.getElementById("play1").addEventListener("click", function() {
    if (audioCorrente && !audioCorrente.paused) {
        // Se l'audio è in riproduzione, lo mettiamo in pausa
        audioCorrente.pause();
        document.getElementById("play1").innerText = "Play";
    } else {
        // Altrimenti, iniziamo la riproduzione
        stopAudio();
        audioCorrente = new Audio(canzone1.Audio);
        audioCorrente.play();
        document.getElementById("play1").innerText = "Pause";
    }
});

// Funzione di riproduzione per la canzone 2
document.getElementById("play2").addEventListener("click", function() {
    if (audioCorrente && !audioCorrente.paused) {
        // Se l'audio è in riproduzione, lo mettiamo in pausa
        audioCorrente.pause();
        document.getElementById("play2").innerText = "Play";
    } else {
        // Altrimenti, iniziamo la riproduzione
        stopAudio();
        audioCorrente = new Audio(canzone2.Audio);
        audioCorrente.play();
        document.getElementById("play2").innerText = "Pause";
    }
});

// Funzione di riproduzione per la canzone 3
document.getElementById("play3").addEventListener("click", function() {
    if (audioCorrente && !audioCorrente.paused) {
        // Se l'audio è in riproduzione, lo mettiamo in pausa
        audioCorrente.pause();
        document.getElementById("play3").innerText = "Play";
    } else {
        // Altrimenti, iniziamo la riproduzione
        stopAudio();
        audioCorrente = new Audio(canzone3.Audio);
        audioCorrente.play();
        document.getElementById("play3").innerText = "Pause";
    }
});





document.getElementById("video1").src = canzone1.Link;  
document.getElementById("video2").src = canzone2.Link;  
document.getElementById("video3").src = canzone3.Link;  
