const myNums = [11, 12, 13]


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


const initaialValue = 4
const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, initaialValue)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)

console.log(`Total Price of all items you added : ${priceToPay}`)