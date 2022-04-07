function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

console.log(chunk(["a", "b", "c", "d", "e"], 2));