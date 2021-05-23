const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { isValidObjectId } = require('mongoose');

const string = 'username:password';
const encoded = base64.encode(string);
console.log('Encoded: ', encoded);

const decoded = base64.decode(encoded);
console.log('Decoded: ', decoded);


// async function getSalt(){
//     const salt = await bcrypt.genSalt(10);
//     console.log('Salt :', salt);
// }
// getSalt();

const password = '1234';
const complexity = 10;
encrypt(password, complexity);

async function encrypt(password, complexity) {
    //sign up
    const hashed = await bcrypt.hash(password, complexity);
    console.log('hashed :', hashed);
    //database
    const p1 = '$2b$10$CSIAiQoCGPskeoh5y3BbuOk/QPN6k1lkFW/lRVoz2LoeJhM9mYSvu';//db
    const p2 = '$2b$10$GUgZojN9SD3Gp6mmfjqn6OpU6aAi6JnMk4i7aF6i/1Di/VAIySc9m';
    const p3 = '$2b$10$GUgZojN9SD3Gp6mmfjqn6OpU6aAi6JnMk4i7aF6i/1Di/VAIySc9n';//changed encrption
    //login
    const isP1Valid = await bcrypt.compare(password, p1);
    const isP2Valid = await bcrypt.compare(password, p2);
    const isP3Valid = await bcrypt.compare(password, p3);

    console.log('isvalid :', isP1Valid);
    console.log('isvalid :', isP2Valid);
    console.log('isvalid :', isP3Valid);
}
