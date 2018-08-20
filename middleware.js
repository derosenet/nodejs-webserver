const express = require('express');

var app = express();

// server up a directory
app.use(express.static(__dirname + '\\Public'));

// next tells when the middleware function is done
// look like this middleware function will run before anything else
app.use((req, res, next) => {
    var now =new Date().toString();
    console.log(now);
    console.log(req.method);
    console.log(req.url);
    // you have to call next(), otherwise no other request will start
    next();
});

// another middleware function that doesn't call next()
app.use((req, res, next) => {
    res.send('<html><body><h1>We will be right back</h1></body></html>');
    // because we never call next(), hello world doesn't render
});

app.get('/', (req, res) => {
    res.send('Whatever! ' + __dirname);
});

app.get('/hello', (req, res) => {
    res.send('Hello world! ' + __dirname);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});