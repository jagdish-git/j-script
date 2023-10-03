/* Immediately Invoked Function Expression <IIFE> */
// ()()


(function iife() {
    // named iife
    console.log("Database connected successfully");
})();

( (name) => {
    // un-named iife
    console.log("must use semi-colon to finish the iife")
    console.log(`${name} function iiFE`)
})('arrow');