import React from 'react'
import ReactDOM from 'react-dom'
import './dbAddBook.css';




const DBAddBook = () => { 
    return (
            <div className="addBookContainer">
                <div className="addBookTitle">
                    <h1>Add a new book</h1>
                </div>
                <div className="addBookForm">
                    <form>
                    <label>
                        Title:
                        <input type="text" name="title" />
                    </label><br></br>
                    <label>
                        Author:
                        <input type="text" name="author" />
                    </label><br></br>
                    <label>
                        Date read:
                        <input type="date" name="date" />
                    </label><br></br>
                    <label>
                        Book cover:
                        <input type="file" name="name" />
                    </label><br></br>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
      )
    }
export default DBAddBook;