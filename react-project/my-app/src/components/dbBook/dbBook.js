import React from 'react'
import ReactDOM from 'react-dom'
import './dbBook.css';




const DBBook = () => { 
    return (
        <div className="bookContainer">
            <div className="bookHeader">
                <h1>Book title - Book author</h1>
            </div>

            <div className="bookGrid">
                <div className="bookLeftCol">
                    <h1>Book cover image will appear here</h1>
                </div>
                <div className="bookRightCol">
                    <h2>Book rating</h2>
                    <h2>Total note count on this book</h2><br></br>
                    <a href="#" className="btnBookNewNote">New Note</a><br></br><br></br>
                    <a href="#" className="btnBookNewNote">Delete book</a>
                </div>
            </div>
        </div>
      )
    }
export default DBBook;