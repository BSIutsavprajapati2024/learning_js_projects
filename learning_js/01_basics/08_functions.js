function addTwoNumbers(num1,num2) //parameters
{
    return num1+num2
}
num1 = addTwoNumbers(3,5) // 8 arguments
num2 = addTwoNumbers(3,"5") //35
console.log(num1,num2);


function loginUserMessage(username = "xyz"){
    if(!username){
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("test"));
console.log(loginUserMessage());


function CalculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(CalculateCartPrice(14,5,6,7,8,8));


const user ={
    name: "test",
    price: "2000",
}
function HandleObject(obj){
    console.log(`Username is ${obj.name} and price is ${obj.price}`);
}
HandleObject(user)

// global scope and localscope
function one(){
    const username = "test"
    function two(){
        const website="test.com"
        console.log(website);
    }
    // console.log(website);
    two()
}
one()


// two wayts to define function
console.log(addone(5))
function addone(num){
    return num+1
}

const addtwo = function(num){
    return num+2
}
console.log(addtwo(5))


// this keyword use
const usertwo = {
    username: "test",
    price: 150,
    welcomeFunction: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }
}
usertwo.welcomeFunction();
usertwo.username = "sam"
usertwo.welcomeFunction();
console.log(this); //{}

// Implicit functions with arrow key 
const addTwo = (num1,num2) => (num1+num2) // return not used in (vals)
console.log(addTwo(3,4));

// arrow key 
const addTwoMethod = (num1,num2) =>{
    return num1+num2 //return used in {}
}
console.log(addTwoMethod(3,4));

// Immediately Invoked Function Expression (IIFE)
// named IIFE
(function test(){
    console.log("DB CONNECTED");
})();

// simple IIFE
(() => {
    console.log("DB CONNECTED TWO");
})();

// IIFE with parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("SQL");

// Execution Phase  (LIFO - last in first out): 
// 1. Global Execution
// 2. Memory Creation Phase
// 3. Execution Phase