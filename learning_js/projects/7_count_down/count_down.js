const endDate = "29 May 2024 12:43 PM"

document.getElementById("end-date").innerText = endDate;
const input_days = document.querySelectorAll("input")

const clock =() =>{
    const end = new Date(endDate);
    const now = new Date();
    const diff_seconds = (end-now)/1000;
    if (diff_seconds > 0){
        input_days[0].value = Math.floor(diff_seconds/(3600*24))
        input_days[1].value = Math.floor((diff_seconds/3600)%24)
        input_days[2].value = Math.floor((diff_seconds/60)%60)
        input_days[3].value = Math.floor(diff_seconds % 60)
    }
    else{
        input_days[0].value = 0
        input_days[1].value = 0
        input_days[2].value = 0
        input_days[3].value = 0
    }
}
clock()

setInterval(() =>{
    clock()
},1000)