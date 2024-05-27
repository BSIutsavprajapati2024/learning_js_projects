const temp = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(temp);

// output:
// { value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false }

const test = {
    name: "test",
    price: 250,
    isAvailable : true,
    orderList : function(){
        console.log("Order List");
    }
}
console.log(test);
console.log(Object.getOwnPropertyDescriptor(test,"name"));

Object.defineProperty(test,"name",{
    // writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(test,"name"));

for (let [key,value] of Object.entries(test)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}