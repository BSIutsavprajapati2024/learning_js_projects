let password = document.getElementById("password")
let msg = document.getElementById("message")
let strength = document.getElementById("strength")

password.addEventListener("input", ()=>{
    console.log(password.value.length);
    if(password.value.length > 0){
        msg.style.display = "block"
    }
    else{
        msg.style.display = "none"
    }
    if(password.value.length < 4){
        strength.innerHTML = "Weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if(password.value.length >= 4 && (password.value.length < 8)){
        strength.innerHTML = "Medium";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if(password.value.length >= 8){
        strength.innerHTML = "Strong";
        password.style.borderColor = "green";
        msg.style.color = "green";
    }
})