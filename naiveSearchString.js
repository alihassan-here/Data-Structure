/*
    "PseudoCode"
1: Loop over the longer string.
2: Loop over the shorter string.
3: if the characters don't match, break out of the inner loop.
4: if the characters do match, keep going.
5: if you complete the inner loop and find a match, increment the count of the matches
5: Return the count.

*/
function naiveSearch(long,short){
    let count=0;
    for(let i=0;i<long.length;i++){
        for(let j=0;j<short.length;j++){
            if(short[j]!==long[i+j]){
                break;
            }
            if(j===short.length-1){
                count++;
            }
        }
    }
    return count;
}
console.log(naiveSearch("lol love","lov"))