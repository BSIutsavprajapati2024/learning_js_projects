let password = document.getElementById("password")
let msg = document.getElementById("message")
let strength = document.getElementById("strength")

password.addEventListener("input", ()=>{
    if(password.value.length > 0){
        msg.style.display = "block"
        if(password.value.length < 4 && password.value.length >0){
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
    }
    else{
        password.style.borderColor = "#fff";
        msg.style.display = "none";
    }
})

// for password valid or invalid
// const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/
// if(regex.test(password.value)) {
//     console.log('valid password!')
//     valid_invalid_message.innerHTML = "Valid Password";
//     password.style.borderColor = "green";
//     valid_invalid_strength.style.color = "green";
//   }
//   else {
//     console.log("Invalid Password");
//     valid_invalid_message.innerHTML = "Invalid Password";
//     password.style.borderColor = "#ff5925";
//     valid_invalid_strength.style.color = "#ff5925";
//   }