function reverseInt(n) {
    let reversed = n.toString().split('').reverse().join('');
    return (parseInt(reversed) * Math.sign(n));
}
reverseInt(1000);

console.log(reverseInt(123));
console.log(reverseInt(-456));
console.log(reverseInt(10000));