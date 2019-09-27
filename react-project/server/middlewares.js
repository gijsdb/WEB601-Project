/* We are going to create a middleware to check the requested ID if it is integer or not */

function checkID(req, res, next) {
    /* Creating a variable id to capture the id itself and we are going check 
    if id is not an integer then we are going to do something */
    const id = +req.params.id
    if (Number.isInteger(id)) {
        next() // Next function will allow the next middleware function to execute. 
    } else {
        return res.status(400).json('ID must be an integer');
    }
}

module.exports = {
    checkID
}