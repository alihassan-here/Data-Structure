function maxChar(str) {
    let char = {};
    for (let c of str) {
        if (char[c]) {
            char[c]++;
        } else {
            char[c] = 1;
        }
    };
    let max = 0;
    let maxChar = '';
    for (let c in char) {
        if (char[c] > max) {
            max = char[c];
            maxChar = c;
        }
    }
    return maxChar;
}

console.log(maxChar('Hhello world'));