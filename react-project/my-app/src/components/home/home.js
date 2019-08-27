import React from 'react'
import ReactDOM from 'react-dom'
import './home.css';
import { Link } from 'react-router-dom'



const Home = () => { 
    return (
    <div>
        <div class="fullBg">
            <div class="homeContainer1">
                <div className="homeNav">

                        <button className="navBtn"><Link to="/dblanding" className="#">Log in</Link></button>
                        <button className="navBtn">Register</button>
                </div>
                <div className="homeIntro">
                    <h1>BookNote</h1>
                    <h2>An easy way to store and manage notes on books you've read</h2>
                    <button className="actionBtn">
                        Learn more
                    </button>
                </div>
                </div>
                <div class="homeFeatureList">
                    <div class="list">
                        <span className="featureTitle">Feature list</span>
                        <ul>
                            <li>- Add books you've read to a catalog</li>
                            <li>- Add notes on specific books using a rich text editor</li>
                            <li>- Manage notes you've read</li>
                        </ul>
                    </div>
                </div>
            </div>

        
    </div>
      )

    }
export default Home;

