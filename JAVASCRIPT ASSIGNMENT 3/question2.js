// Create a function expression called “printNumbers” that takes a parameter “lastNumber” and prints numbers from 1 to ‘n’ using a loop.



var readlineSync = require('readline-sync');


let number=readlineSync.question('Enter the last number : ');
 
let i = 0

function printNumber(){
    
    for( i=1 ; i<=number ;  i = i + 1){
      console.log(i);
    }
   
}

printNumber();

