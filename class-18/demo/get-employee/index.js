const Employee = require('./employee-schema');

exports.handler = async (event) => {
    try {
        const id = event.pathParameters && event.pathParameters.id ? event.pathParameters.id : null;
        console.log('---id---', id);
        let items;
        if (id) {//get employee by id
            console.log('---single user---');
            items = (await Employee.query('id').eq(id).exec())[0];// we're using the index of zero, because this query will return only one employee.
        } else {// get all employees
            console.log('---all employees---');
            items = await Employee.scan().exec();
        }

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        }
    } catch (error) {
        console.log('---error---', error);
        return {
            statusCode: 500,
            msg: 'exception in index.js get',
            error: error
        }
    }
};
