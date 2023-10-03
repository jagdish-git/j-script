const marvel = ["StarLord", "Groot", "Rocket", "Drax", "Gamora"]
const dc = ["Wonder Woman", "Batman", "Flash", "Aquaman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[5][3])


// const allhero = marvel.concat(dc)
// console.log(allhero);


// const all_new_heros = [...marvel, ...dc]
// console.log(all_new_heros)


const nestArr = [2, 3, 4, [6, 7, 8], 9, [10, 11, [12]]]

const flatArr = nestArr.flat(Infinity)
// console.log(flatArr)

// console.log(Array.isArray(flatArr)) // true
// console.log(Array.isArray('flatArr')) // false
// console.log(Array.from('flatArr')) // ['f', 'l', 'a', 't', 'A', 'r','r']

// console.log(Array.from({name:"jagdish"})) // []


let score1 = 300
let score2 = 400
let score3 = 500

console.log(Array.of(...dc, score1, score2, score3, ...marvel))