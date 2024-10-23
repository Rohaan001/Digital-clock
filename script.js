setInterval(myTime , 1000);
function myTime(){
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("time").innerHTML = time;
}