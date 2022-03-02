function memoize(fibonacci) {
    var cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        } else {
            cache[args] = fibonacci(...args);
            return cache[args];
        }
    }
}

function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2];

    }
    return result[n];
}

const fibn = memoize(fib);
console.log(fibn(6));