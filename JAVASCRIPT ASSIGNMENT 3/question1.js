// a JavaScript function named “greetMessage”that takes a parameter “name”and returns a greeting message. For example, if the input is "Akhil," the function should return "Hello, Akhil!"


var readlineSync = require("readline-sync");

let name = readlineSync.question("WHAT IS YOUR NAME : ");

let message = greetings(name);

function greetings(name){
    return  name;
}
let id =greetings();
console.log("Hello ",message);
