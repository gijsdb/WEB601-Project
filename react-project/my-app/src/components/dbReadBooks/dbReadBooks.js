import React from 'react'
import './dbReadBooks.css';
import { Link } from 'react-router-dom'
import DBBookTile from '../dbBookTile/dbBookTile'

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
        //this.timer = setInterval(() => this.GetUserBooks(), 10000);
        //setTimeout(function() {console.log(this.state.books)}, 8000)
	}

    render() {
        return(
           
            <div className="readContainer">
            
                 <DBBookTile books={this.state.books}/>              
                 <div className="addBook" ><Link to="/dbaddbook" className="linkTxt">Add book</Link></div>
                 
         </div>
        )
    }



    /*
    render() {
        return(
           
            <div className="readContainer">
            <div className="readBookGrid">
                 <DBBookTile books={this.state.books}/>              
                 {//<div className="module" ><Link to="/dbaddbook" className="navLink">Add book</Link></div>
                 }
             </div>
         </div>
        )
    }*/

}



