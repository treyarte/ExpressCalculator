const express = require('express');
const app = express();
const ExpressError = require('./helpers/expressError');

//Routes
const mathRoutes = require('./routes/mathRoutes');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.use('/math', mathRoutes);

app.get('/', function (req, res) {
    res.send("Ashish")
})


/**
 * 404 Error Handler. Express go through all the routes and if it
 * does find the route then it lands here
 */
app.use((req, res, next) => {
    // Creating a new error and passing in the 404 status code
    const error = new ExpressError('Not Found', 404);
    console.log("HI");
    // Passing the error to thee general error handler. when passing and error to next
    // express thinks its an error
    return next(error);
});

/**
 * Generic Error Handler
 */
app.use((err, req, res, next) => {
    //if no status code is on the error then give it a 500 status code
    res.status(err.status || 500);

    console.log(err.stack);
    
    //return a json error object
    return res.json({
        status: err.status,
        message: err.message
    });
});


module.exports = app;