class Stack {//LIFO
    constructor() {
        this.top = null;
        this.values = new Array();
    }

    push(value) {
        this.values.unshift(value);
        this.top = value;
    }

    pop() {
        this.values.shift();
        this.top = this.values[0];
    }

    peek() {
        return this.top;
    }
}

module.exports = Stack;