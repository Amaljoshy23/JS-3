// Create a function expression called “printNumbers” that takes a parameter “lastNumber” and prints numbers from 1 to ‘n’ using a loop.




var readlineSync = require("readline-sync");

let lastnumber = parseInt(readlineSync.question("Enter the last number : "));

printNumbers(lastnumber);

function printNumbers(lastnumber) {
  for (let i = 1; i <= lastnumber; i = i + 1) {
    console.log(i);
  }
}
