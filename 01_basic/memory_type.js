let myYoutubename = "Bishwastmgr@gmail.com"
// All the primitive datatype are store in stack
let anotherName = myYoutubename

anotherName = "CodeLearningHero"

console.log(anotherName);
console.log(myYoutubename);

// Whereas non-primitive are store in heap 

let userOne = {
    email: "bishwastmgr@gmail.com",
    upi : 1

}


let usertwo = userOne

usertwo.email = "bishwas4@outlook.com"

console.log(userOne)