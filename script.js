let [milliseconds,seconds, minute, hours] = [0,0,0,0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click",
() => {
    if (int !==null) {
        clearInterval(int);
    }

    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click",
    () => {
        clearInterval(int);
    
    });

    document.getElementById("reset-timer").addEventListener("click",
    () =>{
        clearInterval(int);
        [milliseconds, seconds, minute,hours] = [0,0,0,0];
        timeRef.innerHTML = "00 : 00 : 00 :000 ";
        
    });

    function displayTimer() {
        milliseconds += 10;
        if(milliseconds == 1000) {
            milliseconds = 0;
            seconds ++;
            if(seconds == 60) {
                seconds = 0;
                if(minute == 60) {
                    minute = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10  ? "0" + hours : hours;
        let m = minute < 10 ? "0" +minute : minute;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms =
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        :milliseconds;   


    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`; 
    }