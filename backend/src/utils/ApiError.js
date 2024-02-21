//this file is for throw an error

class ApiError extends Error {
    constructor(
        //these are constructor variables
        statusCode,
        message = "Somethin went wrong",
        error = [],// here error is an array
        stack = ""
    ) {
        //and here we initialized those variables
        super(message)
        this.statusCode = statusCode,
            this.error = error,
            this.data = null,
            this.success = false,
            this.success = false


        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor) //captureStackTrace is used for trace the stack in js,
            //in this case it produce an error
        }
    }

}


export { ApiError }