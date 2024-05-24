const score = 400 // default int value
const balance = new Number(100) // create new int type variable
console.log(score,balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 123.5444456756
console.log(otherNumber.toPrecision(5));


const otherNumber_2 = 1000000
console.log(`US Format : ${otherNumber_2.toLocaleString()}`);
console.log(`Indian Format : ${otherNumber_2.toLocaleString('en-In')}`);



// -----------------------------------Maths--------------------------------------------

console.log(Math.abs(-10)) // negative to positive
console.log(Math.round(4.4)) // 4
console.log(Math.round(4.5)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.2)) // 4
min=100
max=200
console.log(Math.floor(Math.random() * (max-min+1))+ min)