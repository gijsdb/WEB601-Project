import React from 'react'
import ReactDOM from 'react-dom'
import './dbReadBooks.css';
import { Link } from 'react-router-dom'



const DBReadBooks = () => { 
    return (
        <div className="readContainer">
           <div className="readBookGrid">
                <div className="module"><Link to="/dbbook" className="navLink">Book 1</Link></div>
                <div className="module">Book 2</div>
                <div className="module">Book 3</div>
                <div className="module">Book 4</div>
                <div className="module">Book 5</div>
                <div className="module"><Link to="/dbaddbook" className="navLink">Add book</Link></div>
            </div>
        </div>
      )
    }
export default DBReadBooks;