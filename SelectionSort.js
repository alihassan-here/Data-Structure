/*
    O(n^2)
    //PseudoCode
    1: Store the first element as the smallest value you've seen sor far.
    2: Compare this item to the next item in the array until you find a smaller number.
    3: if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    4: if the "minimum" is not the value (index) you initially began with , swap the two values.
    5: Repeat this with the next element until the array is sorted. 
*/
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(i!==min){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}
console.log(selectionSort([0,2,34,22,10,19,17]));