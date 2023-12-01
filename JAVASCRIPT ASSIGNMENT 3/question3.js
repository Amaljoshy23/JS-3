// Create a function expression named printEvenNumbers that takes a parameter n and prints all even numbers from 1 to n using a loop.


var readlineSync = require('readline-sync');


let number=readlineSync.question('Enter a number : ');

printEvenNumbers(number);


 function printEvenNumbers(number){
    let i = 0
    for(i=1 ;i <= number; i = i + 1){
        if(i%2 == 0){
            console.log(i);
        }
    }
}