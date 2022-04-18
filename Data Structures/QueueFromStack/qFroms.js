const Stack = require("../Stack/StackwithArray.js");


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }
    add(record) {
        this.first.push(record);
    }
    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.pop();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }
    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }
        const record = this.second.peek();
        console.log(record);
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
q.peek()
// console.log(q.peek());