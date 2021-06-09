const { Consumer } = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/104801677433/AAAQ',
  handleMessage: async (message) => {
    // do some work with `message`
    console.log(message);
  }
});
 
app.on('error', (err) => {
  console.error(err.message);
});
 
app.on('processing_error', (err) => {
  console.error(err.message);
});
 
app.start();