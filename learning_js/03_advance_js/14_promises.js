const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000) 
});


promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
}).then(function(){
   console.log("Async task is resolved");
});


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "test", email: "test@gmail.com"},1000)      
    })
});
promiseThree.then(function(user){
    console.log(user);
});


const promiseFour = new Promise( function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "test2", password: "123"})
        } else{
            reject("ERROR: something went wrong")
        }
    },1000)
});


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(username => {
    console.log(username);
}).catch(function(e){
    console.log(e);
}).finally(() => console.log("finally"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "test2", password: "123"})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});


async function consumePromiseFive(){
    try {   
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        console.log(response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("e:",error);
    }
}
getAllUsers()


fetch("http://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// notes:
const headers = {
    'Content-Type': 'json',
};
fetch("url",{headers}) // use can also pass the headers 
fetch("url",{
method: "GET",
body: new FormData()})

// special micro task queue or priority queue for fetch ,else will execute after fetch
// response = fetch("url")  
// fetch divided into two parts: 
// Data,onFulfilled[],onRejection[]   and we browser/node => network request => resolve, reject
// if resolve => onFulfilled[] , else => onRejection[] then after ==> Data ==> response val