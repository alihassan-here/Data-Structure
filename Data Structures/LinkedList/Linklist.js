class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        // const node = new Node(data, this.head);
        // this.head = node;
        this.head = new Node(data, this.head);
    }
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) return null;
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
}

const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
console.log(list.getLast());