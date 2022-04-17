const Queue = require('./queue_.js');
function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.enqueue(sourceOne.dequeue());
        }
        if (sourceTwo.peek()) {
            q.enqueue(sourceTwo.dequeue());
        }
    }
    return q;
}


const sourceOne = new Queue();
sourceOne.enqueue(1);
sourceOne.enqueue(2);
sourceOne.enqueue(3);
sourceOne.enqueue(4);

const sourceTwo = new Queue();
sourceTwo.enqueue(5);
sourceTwo.enqueue(6);
sourceTwo.enqueue(7);
sourceTwo.enqueue(8);
// const sourceOne = [1, 2, 3, 4];
// const sourceTwo = [5, 6, 7, 8];

console.log(weave(sourceOne, sourceTwo));