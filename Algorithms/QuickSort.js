/*
    //PseudoCode 
     1: It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
     2: Grab the pivot from the start of the array
     3: Store the current pivot index in a variable (this will keep track of where the pivot should end up)
     4: Loop through the array form the start until the end.
      => If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
     5: Swap the starting element (i-e the pivot) with the pivot index.
     6: Return the pivot index.

     //QuickSort PseudoCode
     1: Call the pivot helper on the array.
     2: When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
     3: your Base case occurs when you consider a subarray with less than 2 elements.
*/
function Pivot(arr, start = 0, end = arr.length) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex;
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){
        let pivotIndex=Pivot(arr,left,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}
console.log(quickSort([3,5,4,1,6,2]))