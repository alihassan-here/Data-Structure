function linearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val) return i;
    }
    return -1;
}
console.log(linearSearch([10,8,7,12,15,20,30],20));