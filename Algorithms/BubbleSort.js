/*
 1: Start Looping from with a variable  called i the end of the array towards the beginning
 2: Start an inner loop with a variable called j form the beginning until i-1.
 3: if arr[i] is greater than arr[i+1], swap those two values.
 4: return the sorted array.
*/
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([6,5,7,4,1,3]))