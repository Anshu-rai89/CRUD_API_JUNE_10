const CustomError = require('./custom-error');
module.exports = class BadRequest extends CustomError {
    statusCode= 400;
    reason = 'Bad request';
    errors = []
    constructor(msg) {
        super(msg);
       
         Object.setPrototypeOf(BadRequest, CustomError.prototype);
    };

    seralizeError (err) {
        return [{
            ...this.errors,
            msg: this.reason
        }]
    }
};