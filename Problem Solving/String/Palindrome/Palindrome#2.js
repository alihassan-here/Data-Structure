function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - 1 - index];
    });
}


console.log(palindrome("apple"));
console.log(palindrome("racecar"));