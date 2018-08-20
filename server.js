const express = require('express');

var app = express();

// server up a directory
app.use(express.static(__dirname + '\\Public'));

// handler for http get request
// '/' is the route
app.get('/', (req, res) => {
    res.send('Hello world!' + __dirname);
});

app.get('/about', (req, res) => {
    res.send({
        name: 'Ron',
        likes: [
            'Tennis', 
            'Biking', 
            'Basketball'
        ]
    });
});

app.get('/bad', (req, res) => {
    res.send({
        status: 'ERROR',
        message: 'Nice try fool!'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
});