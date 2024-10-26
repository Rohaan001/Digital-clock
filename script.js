var hours_el = document.getElementById("hours");
var minutes_el = document.getElementById("minutes");
var seconds_el = document.getElementById("seconds")
var ampm_el = document.getElementById("ampm");

function updateClock() {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();
   var ampm = "AM";
   if(hours > 12) {
      hours = hours - 12;
      ampm = "PM"; 
   }

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   hours_el.innerHTML = hours;
   minutes_el.innerHTML = minutes;
   seconds_el.innerHTML = seconds;
   ampm_el.innerHTML = ampm;

   setTimeout (function(){
      updateClock();
   } 
   , 1000)
}


updateClock();