//HTML Elements

let watch = document.getElementById("sw-text");
let startstop = document.getElementById("start-stop");
let reset = document.getElementById("reset");

// Stopwatch Variables

let seconds = 0;
let minutes = 0;
let hours = 0;

let dSeconds = 0;
let dMinutes = 0;
let dHours = 0;

let interval = null;

let stat = "paused";
//Functions

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        dSeconds = "0" + seconds.toString();
    } else{
        dSeconds = seconds;
    }

    if (minutes < 10){
        dMinutes = "0" + minutes.toString();
    } else{
        dMinutes = minutes;
    }

    if (hours < 10){
        dHours = "0" + hours.toString();
    } else{
        dHours = hours;
    }

    watch.innerHTML = dHours + ":" + dMinutes + ":" + dSeconds;
}

function startStop(){
    if (stat == "paused"){
        interval = window.setInterval(stopWatch, 1000);
        startstop.innerHTML = "Resume";
        stat = "resumed";
    } else{
        window.clearInterval(interval)
        startstop.innerHTML = "Pause";
        stat = "paused";
    }
}

function Reset(){
    window.clearInterval(interval)
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    watch.innerHTML = "00:00:00";
    startstop.innerHTML = "Start";
}