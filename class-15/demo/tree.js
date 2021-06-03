'use strict';

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // root - left - right
    preOrder() {
        let result = [];

        let traverse = (node) => {
            // read the root
            result.push(node.value);
            // read left
            if(node.left) traverse(node.left);
            // read right
            if(node.right) traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];

        let traverse = (node) => {
            // read left
            if(node.left) traverse(node.left);
            // read the root
            result.push(node.value);
            // read right
            if(node.right) traverse(node.right);
        };
        traverse(this.root);
        return result;
    }

    // left - right - root
    postOrder() {
        let result = [];

        let traverse = (node) => {
            // read left
            if(node.left) traverse(node.left);
            // read right
            if(node.right) traverse(node.right);
            // read the root
            result.push(node.value);
        };
        traverse(this.root);
        return result;
    }
}

module.exports = BinaryTree;