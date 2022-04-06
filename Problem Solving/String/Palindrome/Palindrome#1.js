function palindrome(str) {
    var rev = str.split("").reverse().join("");
    return rev == str ? true : false;
}

console.log(palindrome("racecar"));
console.log(palindrome("apple"));