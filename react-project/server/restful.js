const express = require('express');
const app = express()
const router = express.Router()
var cors = require('cors')

const config = require('./dbconfig')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/* Allows for conversion of payload to JSON format */
const jsonParser = bodyParser.json() 

// knex connection to mysql db
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

// add kenex to locals
app.locals.knex = knex

// Using routes
const routes = require('./routes')

// For each request to the API, a function from  bookKnex handles each request
router.get('/books', routes.bookList.listAllBooksKnex);

router.get('/books/:id', middlewares.checkID, routes.bookList.listSingleBook);

router.post('/books', jsonParser, routes.bookList.postBook);

router.patch('/books/:id', jsonParser, middlewares.checkID, routes.bookList.updateBook);

router.delete('/books/:id', middlewares.checkID, routes.bookList.deleteBook);

router.get('/notes', routes.noteList.listAllNotesKnex);

router.post('/notes', jsonParser, routes.noteList.postNote);


router.get('/notes/:id', middlewares.checkID, routes.noteList.listSingleNoteKnex2);

router.get('/notesbybookid/:id', middlewares.checkID, routes.noteList.listSingleNoteKnex);

router.delete('/notes/:id', middlewares.checkID, routes.noteList.deleteNote);

// Add /api to the url as well as cors and router
app.use('/api', cors(), router);

// Confirms server started in console
app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});