import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './dbAddBook.css';


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
        console.log("Book added");
    }

        /*
        const lcTitle = document.getElementById('title').value;
        const lcAuthor = document.getElementById('author').value;
        const lcDate = document.getElementById('date').value;
        const lcFile = document.getElementById('file').value;
        bookArray.push(new Book(lcTitle, lcAuthor, lcDate, lcFile))
        console.log(bookArray);
        //console.log(lcTitle + lcAuthor + lcDate + lcFile)
        */
     
    render() {

        function dataHandle() {
            this.props.callbackFromParent(bookArray);
        }

        return(
            <div className="addBookContainer">
                <header>
                    <h1>Add a new book</h1>
                    <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
                </header>
                <div className='bookInput'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input ref={(ref) => {this.title = ref}} type="text" id="title" name="title" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        Author:
                        <input ref={(ref) => {this.author = ref}} type="text" id="author" name="author" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        Date read:
                        <input ref={(ref) => {this.date = ref}} type="date" id="date" name="date" autocomplete="off"/>
                    </label><br></br>
                    <label>
                        Book cover:
                        <input ref={(ref) => {this.file = ref}} type="file" id="file" name="file" autocomplete="off"/>
                    </label><br></br>
                    <input type="submit" id="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

