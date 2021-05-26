class Queue {//FIFO
    constructor() {
        this.values = new Array();
    }

    enqueue(value) {
        this.values.push(value);//
    }

    dequeue() {
        this.values.shift();
    }

    peek() {
        return this.values[0];// this should be the first item added
    }
}

module.exports = Queue;
