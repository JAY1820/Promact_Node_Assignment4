// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

// Initialize Express app
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route for the home page
app.get('/', (req, res) => {
    // Render the index view
    res.render('index');
});

// Route for adding a user
app.post('/users', (req, res) => {
    // Get the username from the request body
    const username = req.body.username;

    // Append the username to the users.txt file
    fs.appendFile('users.txt', username + '\n', function(err) {
        if (err) throw err;
        console.log('Saved!');
    });

    // Redirect to the users page
    res.redirect('/users');
});

// Route for displaying the users
app.get('/users', (req, res) => {
    // Read the users.txt file
    fs.readFile('users.txt', 'utf8', function(err, data) {
        if (err) throw err;

        // Split the data into an array of usernames
        const users = data.split('\n');

        // Render the users view with the usernames
        res.render('users', { users: users });
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
