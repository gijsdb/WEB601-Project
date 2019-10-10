import React from 'react'
import './dbNavigation.css';
import { Link } from 'react-router-dom'




const DBNavigation = () => { 
    return (
    <div className="navContainer">
        <nav className="dbNav">
            <ul className="navList">
                <li><Link to="/home" className="linkTxt">Log out</Link></li>
                <li><Link to="/dbreadbooks" className="linkTxt">Read Books</Link></li>
                <li><Link to="/dblanding" className="linkTxt">Home</Link></li>
            </ul>
        </nav>
    </div>
      )
    }
export default DBNavigation;