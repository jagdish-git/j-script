// const instaUser = new Object() // singleton object

const instaUser = {}

instaUser.userid = 'zigu_90'
instaUser.name = 'Jagdish'
instaUser.isLoggedIn = true

// console.log(instaUser);


const anyUser = {
    email: 'any897@gmail.com',
    username:{
        fullname:{
            firstname: "jagdish",
            lastname: 'bal'
        },
        userid: 'any_user_124',
    },
    isLoggedIn: true,
    isAdmin: false,
}

// console.log(anyUser.username.fullname.firstname)


const obj1 = {one: 1, two: 12}
const obj2 = {three: 3, two: 5}
const obj3 = {four: 4, three: 16}

// const newObj = {obj1,obj2}
// const newObj = Object.assign({},obj1, obj2, obj3)
// const newObj2 = Object.assign(obj2, obj3, obj1)
// console.log(newObj)
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(newObj2)


const spredObj = {...obj1, ...obj2, ...obj3}

// console.log(spredObj)

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('name'));
// console.log(instaUser.hasOwnProperty('nameId'));


/* de-structure objects */
const course = {
    courseName:'JavaScript',
    price: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: crsInstr } = course

// console.log(crsInstr);