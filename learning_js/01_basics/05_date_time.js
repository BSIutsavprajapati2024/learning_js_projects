let today_Date = new Date()
console.log(typeof today_Date)
console.log(`toDateString : ${today_Date.toDateString()}`)
console.log(`toISOString : ${today_Date.toISOString()}`)
console.log(`toJSON : ${today_Date.toJSON()}`)
console.log(`toLocaleDateString : ${today_Date.toLocaleDateString()}`)
console.log(`toLocaleString : ${today_Date.toLocaleString()}`)
console.log(`toLocaleTimeString : ${today_Date.toLocaleTimeString()}`)
console.log(`toString : ${today_Date.toString()}`)
console.log(`toTimeString : ${today_Date.toTimeString()}`)
console.log(`toUTCString : ${today_Date.toUTCString()}`)



let myCreate_Date = new Date(2024,0,1) //month start from 0
console.log(myCreate_Date.toLocaleDateString());

let myCreate_Date_2 = new Date(2024,0,1,5,3) //month start from 0
console.log(myCreate_Date_2.toLocaleString());

let myCreate_Date_3 = new Date('2023-01-01') //month start from 0
console.log(myCreate_Date_3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreate_Date_3.getTime());


console.log(Math.floor(Date.now())); // for miliseconds
console.log(Math.floor(Date.now()/1000)); // for seconds


let new_Date = new Date()
console.log(new_Date); // today date
console.log(new_Date.getMonth()+1); // get month
console.log(new_Date.getDay()); // get day
console.log(new_Date.getDate()); // get date


console.log(new_Date.toLocaleString('default',{
    weekday: "long"
}))
