const tinderUser = new Object() //singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false 

const regularUser = {
    userID: '123abcd',
    userfullname: {
        username: 'binod',
        detailName: {
            firstName: 'Binod',
            lastName: 'Arrey'
        }
    }
}


// console.log(regularUser)
// console.log(tinderUser)

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)


const user = [
    {
        id: 1,
        email: "ha@haha.com"
    }
]
console.log(user[0].email)

console.log(Object.keys(regularUser))
