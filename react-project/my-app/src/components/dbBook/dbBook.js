import React from 'react'
import { Link } from 'react-router-dom'
import './dbBook.css';
import faker from 'faker';


// The page which displays more information about each individual book when selected from the "Read Books" screen

export default class DBBook extends React.Component {

    constructor(props) {
        super(props);
        this.bookTitle = "title"
        this.bookAuthor = "author"
        this.bookCover = faker.image.avatar()
    }


    render() {
        return(
            <div>
            <div className="dbBookContainer">
                <header>
                    <h1>Book title - Author</h1>
                
                    <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
                </header>
                <section>
                    <h2>cover image appears here</h2>
                    <img src={this.bookCover} alt="An image loaded with faker js"></img>
                </section>
                <section>
                    <ul className="bookActionList">
                        <li><Link to="/dbaddnote" className="btnBookNewNote">New note</Link></li>
                        <li><a href="#" className="btnBookNewNote">Delete book</a></li>
                        <li><p>date read</p></li>
                    </ul>
                </section>
                <div className="noteList">
                    <h2>Notes on book</h2>
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
