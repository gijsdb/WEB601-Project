// Lists all the books from the database
function listAllBooksKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        // DB Query retrieving the ID, title, author and dateread from the table books
        .select('ID','Title', 'Author', 'DateRead')
        .from('tblBooks')
        // Either returns success (200) or error (500)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

// Lists single books by ID
function listSingleBook(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        // DB Query retrieving the ID, title, author and dateread from the table books where the ID matches.
        .select('ID','Title', 'Author', 'DateRead')
        .from('tblBooks')
        .where({
            id: `${id}`
        })
       
        // Response
        .then(data => {
            if (data.length > 0) {
                // Returns successful (200)
                return res.status(200).json(data)
            } else {
                // Returns error (404) with an message
                return res.status(404).json(`Book with ID ${id} does not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Add a book to the DB
function postBook(req, res) {
    const {
        knex
    } = req.app.locals
    const payload = req.body
    // Currently only Title and Author are the mandatory collumns
    const mandatoryColumns = ['Title','Author']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if MC are present then posts data to the database.
    if (mandatoryColumnsExists) {
        knex('tblBooks')
            .insert(payload)
            .then(response => res.status(201).json('Book record created'))
            .catch(error => res.status(500).json(error))

    } else {
        // Displays an error if collumns have not been filled out.
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating a book by id --> Currently not included in the app
function updateBook(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    const payload = req.body
    knex('tblBooks')
        .where('id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Book with id ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

// Deleting a book by id
function deleteBook(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    // Deletetes the book where the ID matches the passed parameter ID
    knex('tblBooks')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Book with id ${id} is removed.`)
            } else {
                res.status(404).json(`Book with id ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllBooksKnex,
    listSingleBook,
    postBook,
    updateBook,
    deleteBook
}