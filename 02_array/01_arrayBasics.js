/* Arrray */

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["IronMan", "Hulk", "Falcon", "Rocket", "Thor"]
const multipleArr = ["Hello", 78, true, -2421, null, false, 
                        932.1312, undefined, ['cat', 'dog'], 
                        {id:2341, name:"jigu", email:'jigu@gmail.com'}, (85-3)]

// console.table([myArr, myHeros, multipleArr])

const myNewArr = new Array(121, 212, 343, 434, 565, 656)

// console.log(myNewArr);
// console.log(myNewArr[4]);
// console.log(myNewArr[42212]); // undefined

/* Array Methods */

// myNewArr.push(787)
// console.log(myNewArr);

// myNewArr.push(878, 989)
// console.log(myNewArr)

// myNewArr.pop()
// console.log(myNewArr)

myNewArr.unshift(101) // added value at first index 
// console.log(myNewArr); 

myNewArr.shift() // remove value at first index 
// console.log(myNewArr);

// console.log(myNewArr.includes(121)) // return boolean true/false
// console.log(myNewArr.indexOf(787)) // return index position / -1(if not in arr)


const newJoinArr = myNewArr.join('-')

// console.log(myNewArr)
// console.log(newJoinArr);
// console.log(typeof newJoinArr);


/* Array Slice , Splice */

// console.log("A >>", myNewArr)

// const sliceArr = myNewArr.slice(1, 3)
// console.log(sliceArr)

// console.log("B >>", myNewArr)

// const sPliceArr = myNewArr.splice(4, 2)
// console.log(sPliceArr)

// console.log("C >>", myNewArr)


