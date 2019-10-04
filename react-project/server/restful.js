const express = require('express');
const app = express()
const router = express.Router()
var cors = require('cors')

const config = require('./dbconfig')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
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

// For each request, a function from  bookKnex handles the request
router.get('/books', routes.bookList.listAllBooksKnex);

router.get('/books/:id', middlewares.checkID, routes.bookList.listSingleBook);

router.post('/books', jsonParser, routes.bookList.postBook);

router.patch('/books/:id', jsonParser, middlewares.checkID, routes.bookList.updateBook)

router.delete('/books/:id', middlewares.checkID, routes.bookList.deleteBook)


// Add api to the url
app.use('/api', cors(), router);




app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});