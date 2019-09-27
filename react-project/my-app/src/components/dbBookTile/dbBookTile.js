import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './dbBookTile.css';

export default class DBBookTile extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <div className="module">Book test</div>
            </div>
        )
    }
}
