const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const sns = new AWS.SNS();

const inputMsg = process.argv[2];
console.log(inputMsg);

const order = {
    orderItem: inputMsg,
    orderName: '401d9'
};

const params = {
    TopicArn: 'arn:aws:sns:us-east-1:104801677433:AAA',
    Message: JSON.stringify(order)
};

sns.publish(params).promise().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});