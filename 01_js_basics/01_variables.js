const accountId=123456
let accountEmail="supriyabandgar21@gmail.com"
var accountPassword="1234"
accountCity="Sangli"
let accountState;

// accountId=2 //Not allowed
accountEmail="supriya21@gmail.com"
accountPassword="2345"
accountCity="Miraj"

/*
Prefer not to use var
because of issue in block scope and functional scope
Mostly use const and let data types.
*/

// User can print single value using console.log
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
