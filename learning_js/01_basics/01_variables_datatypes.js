console.log("test") //print
let userName = "Test" //for assign values
var userAddress = "Test" // for assign values, not prefer to use this due to issues in scope
userCity = "Delhi" //for assign values , not prefer to use

console.table([userName,userAddress,userCity]) // in table format

"user strict"; // treat all js code as newer version

// alert("Ok") // we are using nodejs, not browser


// Data types
let age = 10 //num
let name="Utsav" //string
let salary = 10.0 //float
let isactive = false //boolean
let state;

// others
// numbers range = 2 to power 53
// BigInt
// string= ""
// boolean = true/false
// null = standalone value
// undefined = not defined
// symbol = unique


// object
console.log(typeof "test");
console.log(typeof age);
console.log(typeof undefined);
console.log(typeof null);

// Two types of Data types:
// Primitive : 7 types => Number, String, Boolean, null, undefined,Symbol, BigInt
// Non Primitive (Reference) => Array , Objects, Functions - it will return object

const id = Symbol('123')
const another_Id = Symbol('123')
console.log(id == another_Id); //false

const bigNumber = 33723272744747423233233323232n
console.log(bigNumber);

// Array
const tests = [1,2,3,4];

// Objects
let obj = {
    name:"test",
    age: 22,
}

const myFunct = function(){
    console.log("Hello");
}
console.log(tests, typeof tests); //object
console.log(obj, typeof obj); //object
console.log(myFunct, typeof myFunct); // function object

// Memory Allocation
// Stack(Primitive) - copy,  Heap(Non Primitive) - reference
let userone = {
    'email': 'test@gmail.com',
    id : 12
}

let usertwo = userone
userone.email = "testing@gmail.com" // due to reference , both objects have reference with same value
console.log(userone.email,usertwo.email);


const firstName= new String("test")
console.log(firstName[0],firstName[1],firstName.__proto__); // t e object empty ''
console.log(firstName.toUpperCase()); //TEST
console.log(firstName.charAt(1)); //e
console.log(firstName.indexOf('t')); //0

const newString = firstName.substring(0,2)
console.log(newString); //te

const anotherString = firstName.slice(-2,5)
console.log(anotherString); //te


const new_anotherString = "   te st        "
console.log(new_anotherString.trim()); // it will remove space from start and end 

const url = "https://te4st.com/test%20sky"
console.log(url.replace("%20","-")); 
console.log(url.includes("test")) //true
console.log(url.split('/'))