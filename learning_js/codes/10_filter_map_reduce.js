// foreach not return anything
const coding = ["js","python","c++"]
const value = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(value);

// method1
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const value_new = myNums.filter( (item) => item>4)
const value_new = myNums.filter( (item) => { return item>4})
console.log(value_new);

// method2
const newNums = []
myNums.forEach( (value) => {
    if (value > 4){
        newNums.push(value)
    }
})
console.log(newNums);


// filter with and or condition 
const books = [
    {title:"Book One", genre:"Fiction", published:1981, edition:2004},
    {title:"Book Two", genre:"Non-Fiction", published:1985, edition:2008},
    {title:"Book Three", genre:"History", published:1986, edition:2003},
    {title:"Book Four", genre:"Science", published:2001, edition:2010},
    {title:"Book Five", genre:"History", published:1965, edition:2002},
    {title:"Book Six", genre:"Fiction", published:1956, edition:2009},
    {title:"Book Seven", genre:"Science", published:1979, edition:2007},
    {title:"Book Eight", genre:"Non-Fiction", published:1975, edition:2011},
]
const useBooks = books.filter( (item) => { return item.genre === "Fiction" && item.edition >= 2000})
// const useBooks = books.filter( (item) => { return item.genre === "Fiction" || item.edition >= 2010})
console.log(useBooks);


// add 10 by each numers 
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const new_Numbers = myNumbers.map( (num_new) => { return num_new+10})
const new_Numbers_two = myNumbers
                            .map( (num_new) => { return num_new+10})
                            .map( (num_new) => { return num_new+1})
                            .filter( (num_new) => num_new >=15)

console.log(new_Numbers,new_Numbers_two);


// reduce
const myreduceNums = [11,12,13]

// method1
const output_myreduceNums = myreduceNums.reduce( function (acc,current){
    console.log(acc,current);
    return acc+current
},0)
console.log(output_myreduceNums);

// method2
const output_myreduceNums_Two = myreduceNums.reduce( (acc,current) => acc+current,0)
console.log(output_myreduceNums_Two);

// reduce with arrays
const shoppingcart = [
    {
        itemname: "js course",
        price: 200
    },
    {
        itemname: "python course",
        price: 500
    },
    {
        itemname: "c++ course",
        price: 100
    },
]
const new_val = shoppingcart.reduce( (acc,item) => acc+item.price,0)
console.log(new_val);