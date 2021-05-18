const Node = require('../node.js');
const LinkedList = require('../LL.js');
const { expect } = require('@jest/globals');

describe('liked list class', () => {
    it('should add new item to empty linked list', () => {
        //arrange
        let ll = new LinkedList();
        let value = 5;
        //act
        ll.add(value);
        //assert
        // expect(ll.head).not().toBeNull();
        expect(ll.head.value).toEqual(value);
        expect(ll.head.next).toBeNull();
    });

    it('should add new item to not empty linked list', () => {
        //arrange
        let ll = new LinkedList();
        ll.add(5);
        let newValue = 10;
        //act
        ll.add(newValue);
        //assert
        expect(ll.head.next.value).toEqual(newValue);
        expect(ll.head.next.next).toBeNull();
    });

    it('should add new Head', () => {
        //arrange
        let ll = new LinkedList();
        ll.add(5);
        let newValue = 10;
        //act
        ll.addNewHead(newValue);
        //assert
        expect(ll.head.value).toEqual(newValue);
        expect(ll.head.next.value).toEqual(5)
    });


});