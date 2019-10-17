import React from 'react'
import './dbReadBooks.css';
import { Link } from 'react-router-dom'
import DBBookTile from '../dbBookTile/dbBookTile'

// The heart of my application where the users read books are displayed as tiles
// Uses the RESTful API to retrieve all the books from the database and adds them to the books array which is held in the state

//const myBooks = [];
export default class DBReadBooks extends React.Component {
   
    constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              books: [],
		   })
	}


    // Retrieves all the books from the database and saves them in the array books
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
        this.GetUserBooks();
	}

    // One DBBookTile is created for each item in the books array
    render() {
        return(
           
            <div className="readContainer">
            
                 <DBBookTile books={this.state.books}/>              
                 <div className="addBook" ><Link to="/dbaddbook" className="linkTxt">Add book</Link></div>
                 
         </div>
        )
    }
}



