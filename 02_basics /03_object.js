// Object 
// singleton 
//if object is made with objcet literals then it singleton 

const mySym = Symbol()
const JsUser = {
    name: "Bishwas",
    [mySym]: "myKey1",
    age: 29,
    location: "Darwin",
    email: "bishwastmgr@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}

console.log(JsUser[mySym])

 

myArray = ["h", "i"]
// there is only methond to access element just by the index value

