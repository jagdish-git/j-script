const accountId = 7897
let accountEmail = "account@gmail.com"
var accountPassword = "345663"
accountCity = "Kendrapara"

let accountUndefind;

// accountId = 67896 // not allowed

/*
accountEmail = "account12344@hotmail.com"
accountPassword = "976423"
accountCity = "bbsr"
*/

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountUndefind]);


/*
prefer not to use var keyword
because of issue in block scope and functional scope
*/