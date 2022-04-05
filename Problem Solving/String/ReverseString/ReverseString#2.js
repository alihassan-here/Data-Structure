function reverse(str) {
    let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverse("apple"));