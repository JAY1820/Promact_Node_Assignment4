const express = require('express');
const app = express();
let users = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/users', (req, res) => {
    res.render('users', { users: users });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
