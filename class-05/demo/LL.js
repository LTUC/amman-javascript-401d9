// head
// tail -- 
// length --

'use strict';
const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let node = new Node(value);
        if (!this.head) {// empty linked list
            this.head = node;
        } else {
            let lastNode = this.head;
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
    }

    addNewHead(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
}

module.exports = LinkedList;