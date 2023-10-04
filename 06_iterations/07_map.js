const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const mapNums = myNumbers.map((num) => ( num + 10))
// console.log(mapNums)

const newNums = myNumbers.map((num) => num*10)
                         .map((num) => num+2)
                         .filter((num) => num > 50)
console.log(newNums)