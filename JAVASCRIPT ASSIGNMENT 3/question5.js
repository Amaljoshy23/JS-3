// implement a function expression named printPattern that takes a parameter rows and prints a pattern of stars in the form of a right-angled triangle. For example, if the input is 5, the output should be:
// *
// **
// ***
// ****
// *****


var readlineSync = require('readline-sync');

let rows=readlineSync.question('enter number of rows : ');

printPattern();

function printPattern(){
    for(i=0 ;i <= rows;i = i + 1){
        console.log(" * ".repeat(i));
     }
}