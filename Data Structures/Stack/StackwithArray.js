class Stack {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    isEmpty() {
        return this.data.length === 0;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack);
console.log(stack.pop());
console.log(stack.peek());