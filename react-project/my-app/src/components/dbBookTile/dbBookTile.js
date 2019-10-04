import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './dbBookTile.css';


    const DBBookTile = ({ books }) => {
        return (
          <div>
            {books.map((book) => (
                <div class="module">
                  <h3>{book.Title}</h3><br/>
                  <h3>{book.Author}</h3><br/>
                  <h3>{book.DateRead}</h3><br/>
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

