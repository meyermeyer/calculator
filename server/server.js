const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Require Routes
const calculatorRouter = require('./routes/calculator.router')

// Serve static files
app.use(express.static('build'));

//Routes
app.use('/api/calculator', calculatorRouter)

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});