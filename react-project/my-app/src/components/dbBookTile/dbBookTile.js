import React from 'react'
import { Link } from 'react-router-dom'
import './dbBookTile.css';

// This component displays a tile for each book in the database on the DBReadBooks page
// Uses map to map each item from the books array to a "tile" and displays the corresponding information in each tile
// Gets passed the book array from the DBReadBooks component as a prop

export default class DBBookTile extends React.Component {

    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this)
    }

    // Deletes a book from the database by ID -> Takes the id arugment and sticks it to the end of the URL request to the backend
    deleteBook(id) {
        fetch('http://localhost:4200/api/books' + '/' + id, {
          method: 'DELETE'
        }).then(response =>
          response.json().then(json => {
            return json;
          })
        );
        window.location.reload();
    }

    // Maps out each book in the array books and displays a tile for it
    render() {
        return(
            <div className="readBookGrid">
              {this.props.books.map((book) => (
                <div key={book.ID} className="module">
                    <h2><u>Title</u></h2>
                    <h3>{book.Title}</h3>
                    <h2><u>Author</u></h2>
                    <h3>{book.Author}</h3>
                    <h2><u>Date read</u></h2>
                    <h3>{book.DateRead}</h3>
                    <button onClick={this.deleteBook.bind(this,book.ID)}>Delete</button>
                </div>
            ))}
            </div>
        )
    }
}