const express = require('express');
const app = express()
const router = express.Router()

const config = require('./dbconfig')

const middlewares = require('./middlewares')
const bodyParser = require('body-parser')


/*Now we can make our payload as json format so it can be understood*/
const jsonParser = bodyParser.json() /*We only going to use the jasonParser as middleware */

/* 
We are going to require knex and then immediately going to pass in a configuration object,
first of all we need to specify the client and then connection
 */
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

/*
Then we will take app.locals again and add the knex object 
 */
app.locals.knex = knex

/*  We are going to require routes */
const routes = require('./routes')



router.get('/books', routes.bookList.listAllBooksKnex);

router.get('/books/:id', middlewares.checkID, routes.bookList.listSingleBook);

router.post('/books', jsonParser, routes.bookList.postBook);

router.patch('/books/:id', jsonParser, middlewares.checkID, routes.bookList.updateBook)

router.delete('/books/:id', middlewares.checkID, routes.bookList.deleteBook)



app.use('/api', router);


app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`);
});