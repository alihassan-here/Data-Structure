function fab(n){
    if(n<=0){
        return []
    }
    let array=[0,1]
    while(array.length<n){
        let nextNumber=array[array.length-1]+array[array.length-2]
        array.push(nextNumber)
    }
    return array;
}

// console.log(fab(10)); // 0,1, 2, 3, 5, 8, 13, 21, 34, 55

// Even Fibonacci numbers

function EvenFabonacci(n){
    var a = 1;
    var b = 2;
    var next = a + b;
    var fibonacciArray = [2];
    while(next < 4000000){
        if(next % 2 === 0){
            fibonacciArray.push(next);
        }
        a = b;
        b = next;
        next = a + b;
    }
    return fibonacciArray;
}

console.log(EvenFabonacci())