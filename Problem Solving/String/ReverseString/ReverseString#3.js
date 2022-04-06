function reverse(str) {
    debugger
    return str.split('').reduce((reversed, char) => char + reversed, '')
}

console.log(reverse("apple"));