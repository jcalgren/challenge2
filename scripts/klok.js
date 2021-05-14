

function showTime(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var minute = date.getMinutes(); // 0 - 59
    var second = date.getSeconds(); // 0 - 59
    var session = "";


    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    //tijd oproep index.html bestand.
    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
   //document.getElementById("MyClockDisplay").textContent = time;
    

//datum oproep index.html
   var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
    setTimeout(showTime, 1000);
 }

//achtergrond wijzigen plus groet per dagdeel
var t = new Date().getHours();
if (t < 10) {
    document.getElementById("groet").innerHTML = "Goedenmorgen";
    document.body.background="images/ochtend.png";
} else if (t < 20  ) {
    document.getElementById("groet").innerHTML = "Goedenmiddag";
    document.body.background="images/middag.png";
} else {
    document.getElementById("groet").innerHTML = "Goedenavond";
    document.body.background="images/avond.png";
}

showTime()



