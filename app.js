const express = require('express');
const ExpressError = require('./helpers/expressError');
const app = express();

//Routes
const mathRoutes = require('./routes/math');

app.use(express.json);

//middleware
app.use('/math', mathRoutes);

/**
 * 404 Error Handler. Express go through all the routes and if it
 * does find the route then it lands here
 */
app.use((req, res, next) => {
    // Creating a new error and passing in the 404 status code
    const error = new ExpressError('Not Found', 404);

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

module.export = app;