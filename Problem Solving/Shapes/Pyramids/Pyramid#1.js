function pyramid(n) {
    for (let row = 0; row < n; row++) {
        const midpoint = Math.floor((2 * n - 1) / 2);
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += " ";
            }
        }
        console.log(level)
    }
}

pyramid(5);