// Primitive (Call By Value)

// 7 Types: String,Number,Boolean,null,undefined,symbol,Bigint

const id = Symbol('123')
const anothrId = Symbol('123')

const bigNumber = 34567891234567893456n
console.log(typeof bigNumber);


// Reference (Non Promitive)(Call By Reference)

// Arrays,Objects,Functions

// Data type is object
const heros = ["Shaktiman","Doremon"]

// Data type is object
let myObj= {
    name:"chaitali",
    age:28
}

// Datatype is object function
let myFunction=function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);

// *********************************** Memory *********************
// Stack (Primitive), Heap (Non Primitive)

// In Stack it creates memory allocation for variables and when we assign one variable value to another it creates copy of original value. 
// So when we change another variable value the original variable value remains same as it is
let myName = "Chaitali"
let anotherName = myName
anotherName = "Chaitu"

console.log(myName); // Supriya
console.log(anotherName); // Survi

// This is Object which stores in heap and userOne variable allocate memory in stack
let userOne ={
    email: "chaitali10@gmail.com",
    upi: "user@ybl"
}

// When userOne value assign to userTwo it assigns reference of it not a copy of it. 
// So when any value change in userTwo variable it also change in userOne also 
// because both are pointing to same reference
let userTwo = userOne

userTwo.email = "survi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



