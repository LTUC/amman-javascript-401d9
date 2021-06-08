const uuid = require('uuid').v4;//random
const Employee = require('./employee-schema');

exports.handler = async (event) => {
    try {
        const id = uuid();// unique id wihtout checking the db
        const { name, age } = JSON.parse(event.body);

        let emp = new Employee({ id, name, age });
        let item = await emp.save();

        return {
            statusCode: 201,
            body: JSON.stringify(item)
        };
    } catch (error) {
        return {
            statusCode: 500,
            msg: 'exception in index.js post',
            error: error
        }
    }
};
