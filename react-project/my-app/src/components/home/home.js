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
        {/*  WITH CSS grids */}
        <div className="fullBg">
            <div className="homeContainer">
                <nav className="homeNav">
                    <div class="homeNavCol">
                        <h1>left</h1>
                    </div>
                    <div class="homeNavCol">
                        <h1>right</h1>
                    </div>
                </nav>
                <div className="homeContent">
                    <h2>content</h2>

                </div>
            </div>
        </div>   
            <div className="homeFrame2">
            
            </div> 
    </div>
      )

    }
export default Home;

