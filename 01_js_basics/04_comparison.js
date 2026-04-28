console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// Avoid these type of comparisons. Code must be readable
// The reason is that an equality check == and comparison ><>=<= work differently. 
// Comparisons convert null to a number, treating it as 0 thats why null>=0 is true and null>0 is false.

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === Strict check
console.log("2" === 2);












