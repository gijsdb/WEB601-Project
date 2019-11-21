import React from 'react';
import './dbReadBooks.css';
import { Link } from 'react-router-dom';
import DBBookTile from '../dbBookTile/dbBookTile';

// Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import fetchBooksAction from '../../redux/actions/fetchBooks'; 
import {getBooksError, getBooks, getBooksPending} from '../../redux/reducers/bookReducerNew';

// The heart of my application where the users read books are displayed as tiles
// Uses the RESTful API to retrieve all the books from the database and adds them to the books array which is held in the state

class DBReadBooks extends React.Component {
   
    /*
    constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              books: [],
		   })
	}*/

    // Retrieves all the books from the database and saves them in the array books
    /*
    GetUserBooks() {
        fetch('http://localhost:4200/api/books')
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                books: data, 
            });
            }
		})
		.catch(err => {
		   console.log(err);
        })	
    }

    // When the component has mounted, the books will be retrieved
    componentDidMount() {
        //this.GetUserBooks();
    }*/
    constructor(props) {
        super(props);
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchBooks} = this.props;
        fetchBooks();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    
    // One DBBookTile is created for each item in the books array
    render() {
        const {books, error, pending} = this.props;
    
        if(!this.shouldComponentRender()) return (<h1>Loading</h1>)
    
        return (
            <div className="readContainer">
                <h1>Books you've read</h1>
                 <DBBookTile books={books}/>              
                <Link to="/dbaddbook" className="btn">Add book</Link>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: getBooksError(state),
    books: getBooks(state),
    pending: getBooksPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBooks: fetchBooksAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DBReadBooks);

