import React from 'react'
import './dbNavigation.css';
import { Link } from 'react-router-dom'




const DBNavigation = () => { 
    return (
    <div className="navContainer">
        <nav className="dbNav">
            <ul className="navList">
                <li><Link to="/home" className="navLink">Log out</Link></li>
                <li><Link to="/dbreadbooks" className="#">Read Books</Link></li>
                <li><Link to="/dblanding" className="#">Home</Link></li>
            </ul>
        </nav>
    </div>
      )
    }
export default DBNavigation;