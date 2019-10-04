// Lists all the books
function listAllBooksKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        .select('Title', 'Author', 'DateRead')
        .from('tblBooks')
       
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
        // DB Query
        .select('Title', 'Author', 'DateRead')
        .from('tblBooks')
        .where({
            id: `${id}`
        })
       
        // Response
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
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
    // Parsing payload
    const mandatoryColumns = ['Title','Author']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if MC is filled then posts
    if (mandatoryColumnsExists) {
        knex('tblBooks')
            .insert(payload)
            .then(response => res.status(201).json('Book record created'))
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

// Updating a book by id
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