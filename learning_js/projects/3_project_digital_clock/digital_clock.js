const clock = document.getElementById("clock")

// // dyamic time every 1 second
// setInterval(function(){
//     let date = new Date()
//     clock.innerText = date.toLocaleTimeString();
// },1000)

// static time
let date = new Date()
clock.innerHTML = date.toLocaleTimeString();
