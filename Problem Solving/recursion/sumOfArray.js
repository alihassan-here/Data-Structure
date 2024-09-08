// Write a JavaScript program to compute the sum of an array of integers.  
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sum(array){
    if(array.length===1) {
        return array[0]
    }else{
        return array.pop()+sum(array);
    }

}

console.log(sum([1, 2, 3, 4, 5, 6]))