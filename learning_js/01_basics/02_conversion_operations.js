let score_int="32"
let score_str = "32test"
let scope_float = 32.5
let scope_null = null
let scope_undefined = undefined
let scope_boolean = true

// Convert it into Number
console.log(typeof score_int);
let int_Score = Number(score_int)
console.log(int_Score);
console.log(typeof int_Score); // convert it into number

console.log(typeof score_str);
let str_Score = Number(score_str)
console.log(str_Score);
console.log(typeof str_Score); // convert it into NaN

console.log(typeof scope_float);
let float_Score = Number(scope_float)
console.log(float_Score);
console.log(typeof float_Score); // cconvert it in into float

console.log(typeof scope_null);
let null_Score = Number(scope_null)
console.log(null_Score); // 0
console.log(typeof null_Score); // convert it into obejct with 0

console.log(typeof scope_undefined);
let undefined_Score = Number(scope_undefined)
console.log(undefined_Score); // NaN
console.log(typeof undefined_Score); // convert it into number with NaN

console.log(typeof scope_boolean);
let boolean_Score = Number(scope_boolean)
console.log(boolean_Score); // 1
console.log(typeof boolean_Score); // convert it into number with 1



// Convert it into Boolean
let is_active = 1
let not_active = 0
let empty_string = ""
let name_string = "test"

let boolean_active = Boolean(is_active)
let boolean_not_active = Boolean(not_active)
let boolean_empty_string = Boolean(empty_string)
let boolean_name_string = Boolean(name_string)

console.log(boolean_active) // true
console.log(boolean_not_active) // false
console.log(boolean_empty_string) // false
console.log(boolean_name_string) // true


// Convert it into Boolean
let val_Number = 33
let string_Number = String(val_Number)
console.log(string_Number) // 33
console.log(typeof string_Number); // string

let string_1 = "hello"
let string_2 = "test"
console.log(string_1 + ' '+ string_2)

console.log("1"+2,typeof ("1"+2))
console.log(1+"2",typeof (1+"2"))
console.log("1"+"2",typeof ("1"+"2"))
console.log(1+2,typeof (1+2))
console.log("1"+2+2,typeof ("1"+2+2))
console.log(1+2+"2",typeof (1+2+"2"))
console.log(1+"2"+2,typeof (1+"2"+2))
console.log(true); //true
console.log(+true); //true
console.log(+""); //false


// prefix and postfix for value
let counter = 100
let counter_2 = 100
console.log(`prefix: ${++counter}`);
console.log(`postfix: ${counter_2++}`);