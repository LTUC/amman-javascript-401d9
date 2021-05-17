'use strict';
const uuid = require('uuid').v4;//random

class Person {
    constructor() {
        this.db = [];
        // [{id:, data: {name, type, ...}}]
    }

    read(id) {
        if (id) {
            return this.db.find((p) => p.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        const person = {
            id: uuid(),
            data: obj,
        };
        this.db.push(person);
        return person;
    }

    delete(id) {
        console.log(id);

        this.db = this.db.filter((person) => person.id !== id);
        return this.db;
    }

    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            let p = this.db[i];
            if(p.id === id) {
                this.db[i].data = obj;
                return this.db[i];
            } 
        }
    }
}

module.exports = Person;