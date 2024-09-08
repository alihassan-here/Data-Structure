// Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function fibonnaci(n){
   if(n<2){
    return n;
   }
   return fibonnaci(n-1)+fibonnaci(n-2);
}

const num=10;
for(let i=0;i<num;i++){
    console.log(fibonnaci(i))
}



// console.log(fibonnaci(10))