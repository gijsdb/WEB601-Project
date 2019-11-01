import React from 'react'
import './dbNavigation.css';
import { Link } from 'react-router-dom'


//The dashboard navigation which is present on each dashboard page
const DBNavigation = () => { 
    return (
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <li><Link to="/dblanding" className="linkTxt">Home</Link></li>
                    <li><Link to="/dbreadbooks" className="linkTxt">Read Books</Link></li>
                    <li><Link to="/home" className="linkTxt">Log out</Link></li>
                </ul>
            </div>
          </nav>
    
        /* 
        <div className="navContainer">
            <nav className="dbNav">
                <ul className="navList">
                    <li><Link to="/home" className="linkTxt">Log out</Link></li>
                    <li><Link to="/dbreadbooks" className="linkTxt">Read Books</Link></li>
                    <li><Link to="/dblanding" className="linkTxt">Home</Link></li>
                </ul>
            </nav>
        </div>
        */
    )
}
export default DBNavigation;