// Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".

function isPalindrome(str){
    console.log(str)
    if(typeof str!=='string') return;
    if(str.length<=1) return true;
    if(str[0]!==str[str.length-1]){
        return false
    }else{
        return isPalindrome(str.slice(1,str.length-1))
    }

}

console.log(isPalindrome("madam"))