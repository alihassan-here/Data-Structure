/*
    ----SLIDING WINDOW PATTERN---
    => Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

//---NAIVE SOLUTION---
/*
function maxSubarraySum(arr,num){
    if(num>arr.length) return null;
    var max=-Infinity;
    for(let i=0;i<arr.length;i++){
        temp=0;
        for(let j=0;j<num;j++){
            temp+=arr[i+j];
        }
        if(temp>max) max=temp;
    }
    return max
}
*/

//---REFACTORED SOLUTION----
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum=maxSum;
    for(let i=num;i<arr.length;i++){
        tempSum=tempSum-arr[i-num]+arr[i];
        maxSum=Math.max(maxSum,tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1, 2, 3, 4, 5, 9], 2))