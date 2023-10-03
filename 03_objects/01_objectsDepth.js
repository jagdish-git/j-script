// singleton
// Object.create


// object literals 

const mySymbol = Symbol("KeyOne")

const JsUser = {
    name: 'Jagdish',
    email: 'jagdish@gmail.com',
    phone: 9080709987,
    "address": "Kendrapara",
    isLoggedIn: true,
    [mySymbol]: "myKeyOne",
    lastLoginDays: ['sunday', 'saturday', 'tuesday'],

}

// console.log(JsUser.name);
// console.log(JsUser['email']);
// console.log(JsUser['address']);
// console.log(JsUser['lastLoginDays'][2].toUpperCase());
// console.log(JsUser[mySymbol])

JsUser.email = "baljagdish@outlook.com"
// Object.freeze(JsUser)
JsUser['address'] = "Cuttack"
console.log(JsUser)


JsUser.greetings = function(){
    console.log(`Greetings form JsUser, ${this.name}`);
}

JsUser.greetings()
