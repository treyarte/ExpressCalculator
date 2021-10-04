/**
 * Express error extends the error class so we can use errors in express 
 * and pass error status codes
 */

class ExpressError extends Error {
    constructor(message, status){
        super();
        this.message = message,
        this.status = status
        console.error(this.stack);
    }

    static badRequest(msg) {
        console.log(msg);
        return new ExpressError(msg, 400)
    }
}

module.exports = ExpressError;