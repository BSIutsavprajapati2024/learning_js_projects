let [miliseconds,seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById("displayTime")
let timer = null;

function stopWatch(){
    miliseconds += 10;
    if(miliseconds == 1000){
        miliseconds = 0
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let mili = miliseconds < 99 ? "0" + miliseconds: miliseconds;
    let s = seconds < 10 ? "0" + seconds: seconds;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let h = hours < 10 ? "0" + hours: hours;
    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + mili;
}

function watchStart(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,10);
}

function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [miliseconds,seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00:00"
}