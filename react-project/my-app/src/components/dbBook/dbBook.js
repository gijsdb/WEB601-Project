import React from 'react'
import ReactDOM from 'react-dom'
import './dbBook.css';




const DBBook = () => { 
    return (
        <div>
            <div className="dbBookContainer">
                <header>
                    <h1>Book title - Author</h1>
                
                    <img src="../../img/iconBackArrow.png"></img>
                </header>
                <section>
                    <h2>cover image appears here</h2>
                </section>
                <section>
                    <a href="#" className="btnBookNewNote">New note</a>
                    <a href="#" className="btnBookNewNote">Delete book</a>
                </section>
            </div>
      
      </div>
      )
    }
export default DBBook;