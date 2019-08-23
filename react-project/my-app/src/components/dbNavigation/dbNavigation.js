import React from 'react'
import ReactDOM from 'react-dom'
import './dbNavigation.css';




const DBNavigation = () => { 
    return (
    <div className="navContainer">
        <nav className="dbNav">
            <ul className="navList">
                <li>Log out</li>
                <li>Read Books</li>
                <li>Home</li>
            </ul>
        </nav>
    </div>
      )
    }
export default DBNavigation;