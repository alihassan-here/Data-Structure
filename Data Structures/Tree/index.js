class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data)
        this.children.push(node);
    }

    remove(data) {
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBFS(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.push(...node.children);
            fn(node);

        }
    }

    traverseDFS(fn) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            queue.unshift(...node.children);
            fn(node);
        }
    }
}

const node = new Node(1);
const tree = new Tree();
tree.root = node;

