
const accountId = 144553
let accountEmail = "bishwastmgr@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Kathmandu"

/* 
    Prefer not to use var because of issue in block scope and issue scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])