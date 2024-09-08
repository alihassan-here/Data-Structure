// Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(a,b,result=[]){
    if(a>=b-1){
        return result;
    } 
    else{
        result.push(a+1);
        return range(a+1,b,result)

    }
}

console.log(range(2,9))