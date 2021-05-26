const { expect } = require('@jest/globals');
const Queue = require('../queue.js');
//TDD
describe('queue array', () => {
    it('should enqueue to the queue', () => {
        // arrange
        let queue = new Queue();
        let value = 1;
        let value2 = 2;
        // act
        // [ ]
        queue.enqueue(value);
        // [ 1 ]
        queue.enqueue(value2);
        // [ 1, 2 ].push
        // assert
        expect(queue.values.length).toEqual(2);
        expect(queue.values[0]).toBe(value);
        expect(queue.values[1]).toBe(value2);

        // queue.dequeue();
        // [2] .shift
        // expect(queue.values.length).toEqual(1);
        // expect(queue.values[0]).toBe(value2);
    });
    
    it('should denqueue to the queue', () => {//LIFO
        // arrange
        let queue = new Queue();
        let value = 1;
        let value2 = 2;
        // []
        queue.enqueue(value);
        // [ 1 ]
        queue.enqueue(value2);
        // [ 1 , 2]

        // act
        queue.dequeue();
        // [ 2 ]
        // assert
        expect(queue.values.length).toBe(1);
        expect(queue.values[0]).toBe(value2);
    });

    it('should peek the last value', () => {
        // arrange
        let queue = new Queue();
        let value = 1;
        let value2 = 2;
        // [ ]
        queue.enqueue(value);
        // [ 1 ]
        queue.enqueue(value2);
        // [ 1, 2 ]
        // act
        let item = queue.peek();
        // assert
        expect(item).toBe(value);
    });
});
