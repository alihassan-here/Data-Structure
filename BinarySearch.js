/*
1=> The function accepts a sorted array and a value.
2=> Create a left pointer at the start of the array and a right pointer at the end of the array.
3=> While the left pointer comes before the right pointer :
    *: Create a pointer in the middle
    *: if you find the value you want, return the index
    *: if the value is too small, move the left pointer up
    *: if the value is too large, move the right pointer down
4=> if you never find the value, return -1;


*/


function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start<=end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle]==elem){
    return middle;
    }
    return -1;
}
console.log(binarySearch([2,4,5,7,8,9,10],10))