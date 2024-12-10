function generateRandomInteger(min, max) {
    let number = Math.random()
    number = number * (max - min + 1) + min
    return Math.floor(number)
}

let verde = 0
let reazioneConsentita = false

function handleClick(event) {

    document.querySelector("#result").innerHTML = ""
    let startTimer = generateRandomInteger(500, 4000)
    verde = 0
    reazioneConsentita = false
    resetLuci()

    setTimeout(function(){
        luce1.classList.remove("bg-base")
        luce1.classList.add("bg-red")
    }, startTimer)

    setTimeout(function(){
        luce2.classList.remove("bg-base")
        luce2.classList.add("bg-red")
    }, startTimer*2)
    
    setTimeout(function(){
        luce3.classList.remove("bg-base")
        luce3.classList.add("bg-red")
    }, startTimer*3)

    setTimeout(function(){
        luce1.classList.remove("bg-red")
        luce1.classList.add("bg-base")
    }, startTimer*4)

    setTimeout(function(){
        luce2.classList.remove("bg-red")
        luce2.classList.add("bg-base")
    }, startTimer*4)
    
    setTimeout(function(){
        luce3.classList.remove("bg-red")
        luce3.classList.add("bg-base")
    }, startTimer*4)

    setTimeout(function(){
        luce4.classList.remove("bg-base")
        luce4.classList.add("bg-green")
        verde = Date.now()
        reazioneConsentita = true
    }, startTimer*4)
}

function calcolaReazione(event) {
    if (!reazioneConsentita) {
        document.querySelector("#result").innerHTML = "Falsa Partenza!";
    } else {
        let tempoReazione = (Date.now() - verde) / 1000;
        document.querySelector("#result").innerHTML = `Tempo di reazione: ${tempoReazione.toFixed(3)} secondi.`
        reazioneConsentita = false;
    }
}

function resetLuci() {
    luce1.classList.remove("bg-red");
    luce2.classList.remove("bg-red");
    luce3.classList.remove("bg-red");
    luce4.classList.remove("bg-green");
    luce1.classList.add("bg-base");
    luce2.classList.add("bg-base");
    luce3.classList.add("bg-base");
    luce4.classList.add("bg-base");
}

let luce4 = document.querySelector("#green")
let luce3 = document.querySelector("#red3")
let luce2 = document.querySelector("#red2")
let luce1 = document.querySelector("#red1")
let btn = document.querySelector("#btn")
btn.addEventListener("click", handleClick)
let bg = document.querySelector("#he")
bg.addEventListener("click", calcolaReazione)