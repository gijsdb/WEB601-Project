import React from 'react'
import ReactDOM from 'react-dom'
import './home.css';




const Home = () => { 
    return (
    <div>
        {/* NO FLEXBOX
        <div className="homeContainer1">
            <nav className="homeNav">
                <ul className="homeNavList">
                    <li>Log in</li>
                    <li>Register</li>
                </ul>
            </nav>
        <div className="contentContainer">
                <h1>testing</h1>
        </div>
        </div>
        <div className="homeContainer2">
            <div className="contentContainer">
                <h1>testing</h1>
            </div>
        </div>
        <footer className="homeFooter">
            <p>footer</p>
        </footer>
        */}
        {/*  WITH FLEXBOX  */}
        <div className="fullBg">
            <div className="homeContainer">
            
                <nav className="homeNav">
                    <h1>header</h1>
                </nav>
                <div className="homeContent">
                    <h2>content</h2>

                </div>
            </div>
        </div>   
            <div className="frame2">
            
            </div> 
    </div>
      )

    }
export default Home;

