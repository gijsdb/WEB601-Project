import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './dbAddBook.css';

class Book {
    constructor(title, author, date, file) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.file = file;
        
    }
}

export default class DBAddBook extends React.Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event) {
        event.preventDefault();
        const lcTitle = document.getElementById('title').value;
        const lcAuthor = document.getElementById('author').value;
        const lcDate = document.getElementById('date').value;
        const lcFile = document.getElementById('file').value;
        var testBook = new Book(lcTitle, lcAuthor, lcDate, lcFile)
        console.log(testBook);
        //console.log(lcTitle + lcAuthor + lcDate + lcFile)
      }


    render() {

        /*
        class Book {
            constructor(title, author, date, file) {
                this.title = title;
                this.author = author;
                this.date = date;
                this.file = file;
                
            }
          
        }
        const CreateBook = () => {
            function useThisInfo(e) {
                e.preventDefault();
                const lcTitle = document.getElementsByName('title').value;
                const lcAuthor = document.getElementsByName('author').value;
                var testBook = new Book(lcTitle,lcAuthor);
                return testBook
            }
        }
        const SubmitBook = (event) => {
            var lcTitle = document.getElementsByName('title')
            var lcAuthor = document.getElementsByName('author')
            var lcDate = document.getElementsByName('date')
            var lcFile = document.getElementsByName('file')
            var testBook = new Book(lcTitle,lcAuthor,lcDate,lcFile)
            console.log("I have fired")
            return testBook;
        }*/

    

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
                        <input type="text" id="title"/>
                    </label><br></br>
                    <label>
                        Author:
                        <input type="text" id="author"/>
                    </label><br></br>
                    <label>
                        Date read:
                        <input type="date" id="date"/>
                    </label><br></br>
                    <label>
                        Book cover:
                        <input type="file" id="file" />
                    </label><br></br>
                    <input type="submit" id="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

