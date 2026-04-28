const accountId=123456
let accountEmail="chaitalikharat10@gmail.com"
var accountPassword="12345"
accountCity="kolhapur"
let accountState;

// accountId=2 //Not allowed
accountEmail="chaitali10@gmail.com"
accountPassword="23456"
accountCity="Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
Mostly use const and let data types.
*/

// User can print single value using console.log
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
