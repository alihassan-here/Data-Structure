function Capitalize(str) {
    // code goes here  
    let words = [];
    let splitStr = str.split(" ");
    for (let char of splitStr) {
        words.push(char[0].toUpperCase() + char.slice(1));
    }
    return words.join(" ");
}

console.log(Capitalize("the quick brown fox"));