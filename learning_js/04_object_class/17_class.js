// // ES6 after
// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     toLowerUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const test = new User("test","test@gmail.com","123")
// console.log(test.encryptPassword());
// console.log(test.toLowerUsername("test"));


// // behind the scenes
// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.toLowerUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// const test = new User("test","test@gmail.com","123")
// console.log(test.encryptPassword());
// console.log(test.toLowerUsername());


// inheritance
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username} successfully`);
    }

    static updateCourse(){
        console.log(`Course was updated by ${this.username} successfully`);
    }

}
const test = new Teacher("test","test@gmail.com","123")
// test.addCourse()

const test_new = new User("test_new")
// test_new.addCourse() //not have access
test_new.logMe()
test.logMe()

console.log(test === test_new);
console.log(test instanceof User);

test.updateCourse() //it has not access due to static method
