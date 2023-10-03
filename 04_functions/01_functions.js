// let func = function(){
//     console.log('JavaScript Function')
// }


function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
    const number = number1 + number2
    // return number
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username, alt = "yash", ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Jagdish"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "zigu",
    followers: 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and followers is ${anyobject.followers}`)
}

// handleObjects(user)
// handleObjects({
//     username: "yash",
//     followers: 399
// })


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));