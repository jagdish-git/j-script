const name = "jagdish"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('jagdish-pk-inc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(1, 4)
const anotherString2 = gameName.slice(-8, -4)
// console.log(anotherString);
// console.log(anotherString2);


const newStringOne = "   Jagdish    Bal    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://developer.mozilla.org/en-US/docs"

console.log(url.replace('-', '~'))

console.log(url.includes('docs'));

console.log(url.split('/'))
console.log('My name is javascript'.split(' '))