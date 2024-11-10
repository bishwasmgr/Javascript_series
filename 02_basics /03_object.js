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
// Always use square notation if you want to access the symbol and always define symbol before using it in Object
JsUser.greeting = function(){
    console.log(`Hello ${this.name}, Welcome to this Project. Your Key is ${this[mySym]}`)

}
console.log(JsUser.greeting())

// console.log(JsUser[mySym])

// JsUser.email = "bishwas4@outlook.com"

// Object.freeze(JsUser)

// console.log(JsUser);


myArray = ["h", "i"]
// there is only methond to access element just by the index value

