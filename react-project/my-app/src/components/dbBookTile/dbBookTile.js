import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './dbBookTile.css';


    const DBBookTile = ({ books }) => {
        return (

            <div className="readBookGrid">
            {books.map((book) => (
               <div class="module">
                  <h2><u>Title</u></h2>
                  <h3>{book.Title}</h3>
                  <h2><u>Author</u></h2>
                  <h3>{book.Author}</h3>
                  <h2><u>Date read</u></h2>
                  <h3>{book.DateRead}</h3>
               </div>
            ))}
            </div>
       
        )
      };
      export default DBBookTile




    /*render() {
        return (
            <div>
                    {books.map((book) => (
                    <div class="module">
                        <h1>{book.Title}</h1>
                        <h1>{book.Author}</h1>
                        <h1>{book.DateRead}</h1>
                     </div>
                ))}
            </div>
        )
    }*/

