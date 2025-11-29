class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let current = this.root;


        while (true) {
            if (value < current.data) {
                // go left
                if (current.left === null) {
                    current.left = new Node(value);
                    break;
                }
                current = current.left;
            } 
            else if (value > current.data) {
                // go right
                if (current.right === null) {
                    current.right = new Node(value);
                    break;
                }
                current = current.right;
            } 
            else {
                // duplicate value — ignore or handle as needed
                break;
            }
        }
    }

    print(node = this.root, space = 0, gap = 5) {
        if (!node) return;
        space += gap;
        this.print(node.right, space);
        console.log(" ".repeat(space - gap) + node.data);
        this.print(node.left, space);
    }
}


const bstArray = [10, 5, 15, 2, 7, 12, 20];

const tree = new BST();

for (let value of bstArray) {
    tree.insert(value);
}

console.log(tree.print());