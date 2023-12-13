// Define a function named sumOfSquares that takes a parameter n and calculates the sum of the squares of numbers from 1 to n using a loop.



var readlineSync = require('readline-sync');

let n=readlineSync.question('Enter a number : ');

let sum = 0;
function sumOfSquares(n){
    for(i=1 ;i <= n; i = i + 1){
        sum = sum + i ** 2;
        
    }
    console.log("The sum of squares  =",sum);
}
sumOfSquares(n);
