const { expect } = require('@jest/globals');
const Stack = require('../stack.js');
//TDD
describe('stack array', () => {
    it('should push to the stack', () => {
        // arrange
        let stack = new Stack();
        let value = 10;
        // act
        stack.push(value);
        // assert
        expect(stack.values.length).toEqual(1);
        //for loop all the items and get the value of the last one
        expect(stack.top).toEqual(value);

        // let top = null;
        // push(){top = 5}
        // [1, 4, 8, 5]
    });
    
    it('should pop to the stack', () => {//LIFO
        // arrange
        let stack = new Stack();
        stack.push(2);
        stack.push(5);
        //[2 , 5]

        // act
        stack.pop();
        //[2]

        // assert
        expect(stack.values.length).toEqual(1);
        expect(stack.top).toEqual(2);
    });

    it('should peek the last value', () => {
        // arrange
        let stack = new Stack();
        let value = 5;
        stack.push(value);
        // act
        let item = stack.peek();
        // assert
        expect(item).toEqual(value);
    });
});