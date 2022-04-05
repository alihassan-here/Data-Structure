function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '')
}

console.log(reverse("apple"));