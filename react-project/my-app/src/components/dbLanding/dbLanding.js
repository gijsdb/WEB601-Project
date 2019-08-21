import React from 'react'
import ReactDOM from 'react-dom'
import './dbLanding.css';




const DBLanding = () => { 
    return (
        <div className="landingContainer">
            <div className="landingHeader">
                <h1>Welcome to your dashboard $username</h1>
            </div>
            <div className="landingContent">
                <h2>Quick start guide</h2>
                <ul className="landingFeatureList">
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
      )
    }
export default DBLanding;