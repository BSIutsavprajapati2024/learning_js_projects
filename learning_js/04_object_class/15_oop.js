// const user = {
//     username : "test",
//     login_count : 9,
//     signed_In : true,
    
//     getUserDetails: function(){
//         console.log(`Username: ${this.username}`);
//         console.log(this);

//     }
// }

// console.log(user.username);
// console.log(user.username);
// console.log(this); //global context {}
// console.log(user.getUserDetails());


// function User(username,login_count,signed_In) {
//     this.username = username
//     this.login_count = login_count
//     this.signed_In = signed_In

//     return this
// }

// const userOne = new User("test",1,true)
// const userTwo = new User("test2",2,false)
// console.log(userOne,userTwo);


// // prototyple inheritance
// // function as object
// function multiple5(num){
//     return num*5
// }
// multiple5.power = 5
// console.log(multiple5(5));
// console.log(multiple5.power);
// console.log(multiple5.prototype);

function creatUser(username,score){
    this.username = username
    this.score = score
}

creatUser.prototype.increment = function(){
    this.scor++;
}
creatUser.prototype.print = function(){
    console.log(`Price is ${this.score}`);
}

const test_one = new creatUser("test_one",25)
const test_two = creatUser("test_two",250)
test_one.print()


// let name_new = "     test            ";
// console.log(name_new.trim().length);

// arrray
let myheros = ['thor','spiderman']
// object
let heroPower = {
    thor:'hammer',
    spiderman: 'sling',
    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}
Object.prototype.test = function(){
    console.log('test is present in all objects');
}
Array.prototype.test_array = function(){
    console.log('test_array is present in array');
}
//object power goes to all function, array, string {high power to low power}
heroPower.test() 
myheros.test()

//array power goes to only array{not possible to higher power from low power}
// heroPower.test_array()
myheros.test_array() 


// // prototyple inheritance
// const User = {
//     name: "test",
//     email: "test@gmail.com"
// }

// const Teacher = {
//     makevideo : true
// }

// const TeachingSupport = {
//     isAvailable : false
// }

// const TASupport = {
//     make_Assetment : 'Js',
//     full_time : true,
//     __proto__: TeachingSupport
// }
// Teacher.__proto__ = User

// //modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

let string_name = "test          "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
string_name.trueLength()