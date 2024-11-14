//Arrow Function 

const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Bishwas"
//     console.log(this.username)
// }

// chai()

// const chai =  function () {
//     let username = "bishwas"
//     console.log(this.username)
// }


const chai = () =>{
    let username = "hitesh"
    console.log(this)
}

chai()


// Arrow function basics 


