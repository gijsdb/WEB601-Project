import React from 'react'
import { Link } from 'react-router-dom'
import './dbBook.css';


// The page which displays more information about each individual book when selected from the "Read Books" screen
// Currently is not connected to the database --> Work in progress

export default class DBBook extends React.Component {

    constructor(props) {
        super(props);
        this.bookTitle = "title"
        this.bookAuthor = "author"
    }


    render() {
        return(
            <div>
            <div className="dbBookContainer">
                <div className="bookHeader">
                    <h1>Book title - Author</h1>
                    <p>date read</p>
                    <Link to="/dbreadbooks" className="btn">Back</Link>
                </div>

                <div className="noteList">
                    <h2>Notes on book</h2>
                    <Link to="/dbaddnote" className="btn">New note</Link>
                    <ul>
                        <li><Link to="/dbnote">Note one</Link></li>
                        <li>Note two</li>
                        <li>Note three</li>
                        <li>Note four</li>
                    </ul>
                </div>
            </div>
      </div>
    )    
    }
}
