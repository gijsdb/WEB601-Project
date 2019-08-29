import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './dbBook.css';




const DBBook = () => { 
    return (
        <div>
            <div className="dbBookContainer">
                <header>
                    <h1>Book title - Author</h1>
                
                    <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
                </header>
                <section>
                    <h2>cover image appears here</h2>
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
                        <li>Note one</li>
                        <li>Note two</li>
                        <li>Note three</li>
                        <li>Note four</li>
                    </ul>
                </div>
            </div>
      
      </div>
      )
    }
export default DBBook;