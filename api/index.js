const serverless = require('serverless-http');
const app = require('express');
app.get('/',(req,res) => {
    res.send('Doctor portal is runing')
});

module.exports.handler = serverless(app);   