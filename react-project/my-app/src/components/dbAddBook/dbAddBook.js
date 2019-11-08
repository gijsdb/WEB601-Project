import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './dbAddBook.css';


// The component which contains the form to add books to the database. 
// Takes data from the form, converts it to JSON and then POSTS to the database

var bookArray = [];

export default class DBAddBook extends React.Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handles the submission of the add book form and adds it to the database
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/books', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "Title": this.title.value,
             "Author": this.author.value,
             "DateRead": this.date.value,
            })});
        alert("Book added");
    }

    render() {

        function dataHandle() {
            this.props.callbackFromParent(bookArray);
        }

        return(
            <div className="addBookContainer">
                <header>
                    <h1>Add a new book</h1>
                    
                </header>
                
                <div className='bookInput'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        <p>Title:</p>
                        <input ref={(ref) => {this.title = ref}} type="text" id="title" name="title" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        <p>Author:</p>
                        <input ref={(ref) => {this.author = ref}} type="text" id="author" name="author" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        <p>Date read:</p>
                        <input ref={(ref) => {this.date = ref}} type="date" id="date" name="date" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        <p>Book cover:</p>
                        <input ref={(ref) => {this.file = ref}} type="file" id="file" name="file" autocomplete="off"/>
                    </label><br></br>
                    <input type="submit" className="btn" id="Submit"/>
                    <Link to="/dbreadbooks" className="btn">Back</Link>
                    </form>
                </div>
            </div>
        )
    }
}

