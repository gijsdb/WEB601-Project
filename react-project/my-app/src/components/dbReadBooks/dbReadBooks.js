import React from 'react'
import ReactDOM from 'react-dom'
import './dbReadBooks.css';
import { Link } from 'react-router-dom'
import DBBookTile from '../dbBookTile/dbBookTile'

const myBooks = [];
export default class DBReadBooks extends React.Component {
   
    constructor() {
        super();
        this.state = myBooks
    }


    render() {
        
        return(
            <div className="readContainer">
            <div className="readBookGrid">
                 <DBBookTile/>      
                 <DBBookTile/>   
                 <DBBookTile/>   
                 <DBBookTile/>          
                 <div className="module" ><Link to="/dbaddbook" className="navLink">Add book</Link></div>
             </div>
         </div>
        )
    }

}



