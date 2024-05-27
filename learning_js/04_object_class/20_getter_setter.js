class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const test = new User("test@gmail.com","abc")
console.log(test.password,test.email);