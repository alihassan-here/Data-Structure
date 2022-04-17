class Queue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    front() {
        return this.data[0];
    }
    isEmpty() {
        return this.data.length === 0;
    }
    size() {
        return this.data.length;
    }
    print() {
        console.log(this.data);
    }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.isEmpty());
queue.print();
console.log(queue.size());
module.exports = Queue;