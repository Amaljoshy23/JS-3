// Define a function named sumOfSquares that takes a parameter n and calculates the sum of the squares of numbers from 1 to n using a loop.



var readlineSync = require('readline-sync');

let a=readlineSync.question('Enter a number : ');

let sum=0;

sumOfSquares();

function sumOfSquares(){
    for(i=1 ;i <= a; i = i + 1){
        sum = sum + i ** 2;
        
    }
    console.log("The sum of squares  =",sum);
}
