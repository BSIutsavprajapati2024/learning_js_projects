const mySmbol = Symbol("email")


const user = {
    name: 'test',
    [mySmbol]: 'test@gmail.com',
    age: 28,
    location: 'Gandhinagar',
    isLoggedin: false,
    lastloginDays: ['Monday','Tuesday']
}

console.log(user.name);
console.log(user["name"]);
console.log(user[mySmbol]);

console.log(user.lastloginDays[0]);

user.age = 120
console.log(user.age);
// Object.freeze(user)
user.age = 100
console.log(user.age);


console.log(user);


user.greeting = function(){
    console.log("Hello User");
}

console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greetingTwo());


// nested Objects
const regularUser = {
    email : "test@gmail.com",
    fullname : {
        userfullname: {
            firstname : "test",
            lastname : "xyz"
        }
    },
    isLoggedIn : false
}
console.log(regularUser.isLoggedIn);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
const obj3 = {obj1,obj2} // object into object
const obj4 = Object.assign({},obj1,obj2) // convert into single object
const obj5 = {...obj1,...obj2} //spread into one object
console.log(obj3,obj4,obj5);

// get all keys and values form Object and store into Arrays
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser)); 
console.log(regularUser.hasOwnProperty('isLoggedIn')); //true

const course = {
    courseId: 1,
    courseName: "Js",
    coursePrice: "1000",
}
const {coursePrice} = course //destructuring
console.log(coursePrice);

// json code
const val = {
"gender": "male",
"name": "test"
}
console.log(typeof val,val);