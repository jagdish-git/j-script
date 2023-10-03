const user = {
    username: 'Jagdish',
    followers: 989,

    welcomMessage: function(){
        console.log(`${this.username} has ${this.followers} followers.`)
        console.log(this)
    },
    another : {
        name:'Jatin',
        age: 33,
    }
}

// user.welcomMessage()
// user.username = 'Yash'
// user.welcomMessage()

// console.log(this)

function coffee(){
    let username = "jagu"
    // console.log(this.username)
    // console.log(this)
}
// coffee()

/* Arrow Function */

const chai = () => {
    const username = "yash"
    console.log(this)
}

// chai()

// explicit return
const addTwo = (n1,n2) => {
    return n1 + n2
}
// console.log(addTwo(4,5))


// implicit return
const addThree = (n1, n2, n3) => n1+n2+n3 
// console.log(addThree(4,3,2))

// use () to avoide return
const addFour = (n1, n2, n3, n4) =>  (n1+n2+n3+n4)
// addThree(4,3,2,1)


// const objReturn = () => {newObj: 'Username'} // undefined
const objReturn = (name, email) => ( {newObj: 'Username'} )
// console.log(objReturn())
