'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const sns = new AWS.SNS();

const msg = process.argv[2];
console.log(msg);

const obj = {
    localMessage: msg,
    courseName: '401d9-js'
};

const params = {
    TopicArn: 'arn:aws:sns:us-east-1:104801677433:js401d9-sns',
    Message: JSON.stringify(obj)
};

sns.publish(params).promise().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});