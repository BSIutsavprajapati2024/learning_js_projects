const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%&()*+/^_"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numbersInput = document.getElementById("numbers")
const symbolsInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password= "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numbersInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolsInput.checked){
        password += getRandomData(symbolSet)
    }
    console.log(password.length,totalChar.value);
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    password = password.slice(0,totalChar.value);
    console.log(password);
    // let text = "Hello world!"; 
    // let result = text.slice(4);
    console.log(truncate(password,totalChar.value));
    passBox.innerText = truncate(password,totalChar.value);
}
document.getElementById("btn").addEventListener('click', function(){
    generatePassword();
})
generatePassword();
function truncate(Str,num){
    if(Str.length > num){
        let subStr = Str.substring(0,num);
        return subStr;
    } else{
        return Str;
    }
}