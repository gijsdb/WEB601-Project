import React from 'react'
import { Link } from 'react-router-dom'
import './dbBookTile.css';



export default class DBBookTile extends React.Component {

    constructor(props) {
        super(props);
        this.deleteBook = this.deleteBook.bind(this)
    }

    // Deletes a book from the database by ID
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


/* Old code
    const DBBookTile = ({ books }) => {
       
        return (

            <div className="readBookGrid">
            {books.map((book) => (
               <div key={book.ID} className="module">
                  <h2><u>Title</u></h2>
                  <h3>{book.Title}</h3>
                  <h2><u>Author</u></h2>
                  <h3>{book.Author}</h3>
                  <h2><u>Date read</u></h2>
                  <h3>{book.DateRead}</h3>
                  <button>Delete</button>
               </div>
            ))}
            </div>
       
        )
      };
      export default DBBookTile




    /*render() {
        return (
            <div>
                    {books.map((book) => (
                    <div class="module">
                        <h1>{book.Title}</h1>
                        <h1>{book.Author}</h1>
                        <h1>{book.DateRead}</h1>
                     </div>
                ))}
            </div>
        )
    }*/

