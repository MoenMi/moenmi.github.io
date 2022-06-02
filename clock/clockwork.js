/*
    Javascript code for the clock.html page
*/

var time, h, m, s, twelveHour;
twelveHour = true;
track = 0;
window.onload = function() { setInterval( timeNow, 100); }

function timeNow() {

    time = new Date();
    h = time.getHours();
    m = time.getMinutes();
    s = time.getSeconds();

    if (twelveHour) {
        if (h === 0) h = 12;
        if (h > 12) h -= 12;
    }
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
            
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    document.title = h + ":" + m + ":" + s;

}

function change12Hour() {
    twelveHour = !twelveHour;
}