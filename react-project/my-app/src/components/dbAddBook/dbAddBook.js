import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './dbAddBook.css';


export default class DBAddBook extends React.Component {
    render() {
        return(
            <div className="addBookContainer">
                <header>
                    <h1>Add a new book</h1>
                    <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
                </header>
                <div className='bookInput'>
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
}
