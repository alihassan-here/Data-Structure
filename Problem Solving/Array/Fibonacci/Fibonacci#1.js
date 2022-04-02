function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];

    }
    return result[n];
}

console.log(fib(6));