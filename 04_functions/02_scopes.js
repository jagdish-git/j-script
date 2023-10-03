/* Scopes in function */

let a = 100
const b = 500
var c = 400

if (true){
    let a = 4
    const b = 6
    var c = 7
    // console.log(a,b, c) //local scope
}

// console.log(a, b, c) // global scope

// don't use var for better experience


function one(){
    const username = 'jagdish'

    function two(){
        const website = 'developer.mozilla.org'
        console.log(website)
        console.log('Inside Two Function-',username)
    }
    // console.log(website) // can't accessabel
    // console.log(username)

    two()
}

// one()


if (true) {
    const username = "Jagdish"
    if (username === "Jagdish") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)) // accessable 

function addone(num){
    return num + 1
}

//addone(5) // accessable

// addTwo(5) //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)) // only accessable after the function declaration


/* its depend on how you declare the functions */