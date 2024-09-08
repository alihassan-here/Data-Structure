// Write a JavaScript program to check whether a number is even or not

function checkNumber(n){
    if(n<0){
        n=Math.abs(n);
    }
    if(n==0){
        return true
    }
    if(n==1){
        return false
    }else{
        n=n-2;
        return checkNumber(n);
    }
}

console.log(checkNumber(6))