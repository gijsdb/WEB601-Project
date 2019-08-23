import React from 'react'
import ReactDOM from 'react-dom'
import './dbNavigation.css';
import { Link } from 'react-router-dom'




const DBNavigation = () => { 
    return (
    <div className="navContainer">
        <nav className="dbNav">
            <ul className="navList">
                <li><Link to="/home" className="item" style={{backgroundColor: 'lightGrey'}}>Log out</Link></li>
                <li><Link to="/dbreadbooks" className="item" style={{backgroundColor: 'lightGrey'}}>Read Books</Link></li>
                <li><Link to="/dblanding" className="item" style={{backgroundColor: 'lightGrey'}}>Home</Link></li>
            </ul>
        </nav>
    </div>
      )
    }
export default DBNavigation;