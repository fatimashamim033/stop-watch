var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var interval;
var currentUnit = "milliseconds";

var getHour = document.getElementById("hours");
var getMin = document.getElementById("minutes");
var getSec = document.getElementById("seconds");
var getMili = document.getElementById("miliseconds");

function changeUnit(unit) {
    currentUnit = unit;
}

function start() {
    interval =  setInterval(function() {
        if (currentUnit === "milliseconds") {
            milliseconds++
            getMili.innerHTML = milliseconds
            if (milliseconds >= 60) {
                milliseconds = 0
                seconds++
                getSec.innerHTML = seconds
        }
    //  } else if (currentUnit === "seconds") {
    //         seconds++
    //         getSec.innerHTML = seconds
    //         if 
        else if (seconds >= 60) {
                seconds = 0
                minutes++
                getMin.innerHTML = minutes
            }
        // } else if (currentUnit === "minutes") {
        //     minutes++
        //     getMin.innerHTML = minutes;
        else if (minutes >= 60) {
                minutes = 0
                hours++
                getHour.innerHTML = hours;
            }
        } else if (currentUnit === "hours") {
            hours++
            getHour.innerHTML = hours
        }
}, 10 );

// }
// function start(){
    document.getElementById('aaa'). disabled = true
}
function reset() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    getHour.innerHTML = hours;
    getMin.innerHTML = minutes;
    getSec.innerHTML = seconds;
    getMili.innerHTML = milliseconds;
}

function stop() {
    clearInterval(interval);
    document.getElementById(''), disabled = false
}