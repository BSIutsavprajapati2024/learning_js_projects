const myArray = [0,1,2,3,4,5]
const list_new  = ["Hello","Hii","How are you?"]

const create_array = new Array(3,2,1,1)
console.log(create_array[0]);


create_array.push(7)
console.log(create_array);
create_array.pop()


let new_Array = [0,1,2,3,4,5]
console.log("A",new_Array);

const temp = new_Array.slice(1,3) // it will select elements between start index and end index-1
console.log("B",temp);
console.log("B",new_Array);

const temp_2 = new_Array.splice(1,3) // it will remove elemets from original array
console.log("C",temp_2);
console.log("C",new_Array);

// merge two arrays
const t1 = ["a","b","c"]
const t2 = ["x","y","z"]

// #method1
const new_merge = t1.concat(t2)
console.log(new_merge);

// #method2
const new_merge_2 = [...t1,...t2]
console.log(new_merge_2);


// it will convert into flat Array
// const new_flat_array = [0,1,2,3,4,[0,2,3],[6,7,7,[7,7,7,[7,7]]]]
// const final_flat_array = new_flat_array.flat(Infinity)
// console.log(final_flat_array);

console.log(Array.isArray("test")); //false
console.log(Array.from("test")); // it will create array from string 
console.log(Array.from({name: "test"})); // it will give empty

// create new array from variables
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));