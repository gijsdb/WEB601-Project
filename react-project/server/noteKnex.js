function listAllNotesKnex(req, res) {
    const {
        knex
    } = req.app.locals
    knex
        // DB Query retrieving the ID, title, author and dateread from the table books
        .select('ID','Title', 'Content', 'BookID')
        .from('tblNotes')
        // Either returns success (200) or error (500)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

function listSingleNoteKnex (req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        .select('ID', 'Title', 'Content', 'BookID')
        .from('tblNotes')
        .where({
            BookID: `${id}`
        })
        /*We going to use a promise based lib */
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`No notes exist with ID ${id}`);
            }
        })
        .catch(error => res.status(500).json(error))
}

function listSingleNoteKnex2 (req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        .select('ID', 'Title', 'Content', 'BookID')
        .from('tblNotes')
        .where({
            ID: `${id}`
        })
        /*We going to use a promise based lib */
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`No notes exist with ID ${id}`);
            }
        })
        .catch(error => res.status(500).json(error))
}

function deleteNote(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    // Deletetes the book where the ID matches the passed parameter ID
    knex('tblNotes')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Note with id ${id} is removed.`)
            } else {
                res.status(404).json(`Note with id ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

function postNote(req, res) {
    const {
        knex
    } = req.app.locals
    const payload = req.body
    // Currently only Title and Author are the mandatory collumns
    const mandatoryColumns = ['Content']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    // Checking if MC are present then posts data to the database.
    if (mandatoryColumnsExists) {
        knex('tblNotes')
            .insert(payload)
            .then(response => res.status(201).json('Note record created'))
            .catch(error => res.status(500).json(error))

    } else {
        // Displays an error if collumns have not been filled out.
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

module.exports = {
    listAllNotesKnex,
    listSingleNoteKnex,
    listSingleNoteKnex2,
    deleteNote,
    postNote
}