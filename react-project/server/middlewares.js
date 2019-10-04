// Check ID for integer
function checkID(req, res, next) {
    // Set id from request to var id
    const id = +req.params.id
    // If id is an integer
    if (Number.isInteger(id)) {
        next() // successfull  
    } else {
        return res.status(400).json('ID must be an integer'); // error
    }
}

module.exports = {
    checkID
}