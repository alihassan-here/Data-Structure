function chunk(array, size) {
    const chunked = [];
    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

console.log(chunk(["a", "b", "c", "d", "e"], 2));