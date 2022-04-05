/*
Given Two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed form iceman.
*/
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookUp = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        //if letter exists, increment, otherwise set to 1
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookUp[letter]) return false;
        else {
            lookUp[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram("elloh", "hello"));