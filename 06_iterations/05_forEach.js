const coding = ['py','java','php','js','html','css','cpp']

// coding.forEach(function (vals){
//     console.log(vals);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, array)=> {
//     console.log(item, index, array);
// })

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName:'.js'
    },
    {
        languageName : 'Python',
        languageFileName:'.py'
    },
    {
        languageName : 'Ruby',
        languageFileName:'.rb'
    },
    {
        languageName : 'C++',
        languageFileName:'.cpp'
    },
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
})


// foreach does not store into a variable

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values); // undefined