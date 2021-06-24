//>>>>>>>> Begin Linked List >>>>>>>>>>>>>>>>>>>>>
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
//>>>>>>>> End Linked List >>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>> Begin Hash Table >>>>>>>>>>>>>>>>>>>>>>>

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {// the is a string
        let hash = 0;
        // test
        // sett
        // 0 , 100 = 100
        // 100, 50 = 150
        // 150, 45 = 195
        // 195, 100 = 295
        hash = key.split('').reduce((result, n) => {
            return result + n.charCodeAt(0);
        }, 0) * 599 % this.size;

        // this instead of reduce
        // let result = 0;
        // key.split('').forEach(c => {
        //     result += c.charCodeAt(0);
        // });
        // console.log(result)

        // console.log(hash);
        return hash;//number that will be used as an index
    }

    set(key, value) {
        //claculated the hash number
        let hash = this.hash(key);
        //check if the cell in array does not have value
        //then we need to initiate with an empty linked list.
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        // create new key value pair
        let keyValuePair = { [key]: value };
        // save the key value into linked list
        this.table[hash].add(keyValuePair);
    }

    get(key) {
        // return value;
    }

    contains(key) {
        return true; // or false
    }
}

//>>>>>>>> End Hash Table >>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>> Testing Hash Table >>>>>>>>>>>>>>>>>>>>>
let myhash = new HashTable(1021);
// let myhash = new HashTable(1021);
// if (!myhash.contains('John'))
myhash.set('John', 'Boss');
myhash.set('Cathy', 'The Real Boss');
myhash.set('Zach', 'Kid 1');
myhash.set('Allie', 'Kid 2');
myhash.set('Rosie', 'Dog');
myhash.set('Cat', 'TA');
myhash.set('Justin', 'Student');
myhash.set('Jason', 'Student');
myhash.set('Ben', 'Student');
myhash.set('Timea', 'Student');
myhash.set('Jen', 'Student');
myhash.set('Khalil', 'Student');
myhash.set('Michael', 'Student');
myhash.set('Ovi', 'Student');

console.log( myhash.table);

myhash.table.forEach((data, i) => {
    console.log(i, data && data.values());
});