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
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) return;
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) return;
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        const last = this.getLast();
        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) return;
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;

    }
    midpoint() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    printList() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
    circularList() {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }
    fromLast(n) {
        if (!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        while (slow && n > 0) {
            slow = slow.next;
            n--;
        }
        return slow;
    }

}

const list = new LinkedList();
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertFirst(400);
list.insertFirst(500);
console.log(list.circularList());