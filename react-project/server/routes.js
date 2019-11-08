// Includes the bookKnex which contains the JS database queries
const bookList = require('./bookKnex.js')
const noteList = require('./noteKnex.js')

module.exports = {
    bookList,
    noteList
}