// if else Condition
const temperature = 39
if (temperature == 40){
    console.log("equal to 40");
} else if (temperature >= 40) {
    console.log("more than 40");
} else{
    console.log("less than 40");
}


// if else Condition with and or
const userLoggedIn = true
const debitCard = true
if (userLoggedIn & debitCard){
    console.log("User can buy");
} if (userLoggedIn | debitCard){
    console.log("User");
}

// switch case
const month = "MARCH"
switch(month){
    case 'JAN':
        console.log("JAN");
        break;
    case 'FEB':
        console.log("FEB");
        break;
    case 'MARCH':
        console.log("MARCH");
        break;
    default :
    console.log("Enter Month");
}

// false values - false, 0, -0 , BigInt 0n, "", null, undefined, NaN
// truthly values - "0", 'false', " ", [] , {}, function(){}
const userEmail = 'false'
if (userEmail){
    console.log("Found User");
} else {
    console.log("Not Found User");
}

// //Nullish Coalescing Operator (??): null undefined
// let val_new;
// val_new = 5 ?? 10
// val2 = null ?? 13
// val3 = undefined ?? 15
// console.log(val_new);
// console.log(val2);
// console.log(val3);

// terniary operator
// condition ? true : false
const icePrice = 500
icePrice <=80 ? console.log("less than 80") : console.log("more than 80");


// for loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i,j); 
    }
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if (i <= 5){
            console.log(i,j);
            // break
            continue
        } 
    }
}

// while loop 
index = 0
while(index <=10){
    console.log(index);
    index+=2
}

// do while loop 
let score = 10
do {
    console.log(score);
    ++score
} while (score <= 10);

// for of loop
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

// map function
const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FA","France")
console.log(map);
// forof
for (const key of map) {
    console.log(key); // it will give arrays of keys in map
}
for (const [key,value] of map) {
    console.log(key,':', value); // it will key and value in map
}


//forin
const myObject = {
    js: "Javascript",
    py: "python",
    cpp: "c++"
}
for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`);
}


//forof
const programming = ["python","js","c++","react"]
for (const key in programming) {
        console.log(key,programming[key]);
    }

// forEach
const coding = ["python","js","c++","react"]
coding.forEach( function (item){
    console.log(item);
})
// arrow function
coding.forEach( (item) => {
    console.log(item);
});