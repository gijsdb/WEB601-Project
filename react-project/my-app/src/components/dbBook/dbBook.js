import React from 'react'
import { Link } from 'react-router-dom'
import './dbBook.css';
import DBNoteList from '../dbNoteList/dbNoteList';


// The page which displays more information about each individual book when selected from the "Read Books" screen
// Currently is not connected to the database --> Work in progress

export default class DBBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            isFetching: false,
            book: [],
            notes: []
         })
    }

    GetBook() {
        fetch('http://localhost:4200/api/books/'+ this.props.match.params.id)
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                book: data[0]
            });
            }
		})
		.catch(err  => {
		   console.log(err);
        })	
    }

    GetNotes() {
        console.log(this.props.match.params.id)
        fetch('http://localhost:4200/api/notesbybookid/' + this.props.match.params.id)
		.then(res => res.json())
		.then(data => {
            /*
            switch(data.cod) {
                case '404':
                    this.setState({
                        isFetching: false,
                        notes: []
                    });
                  break;
                case undefined:
                    this.setState({
                        isFetching: false,
                        notes: []
                    });
                  break;
                default:
                    this.setState({
                        isFetching: true,
                        notes: data
                    });
              }
              */
             console.log()
			if(data.cod === '404') {
				this.setState({
                    isFetching: false,
                    notes: []
                })
            } else if(data === 'No notes exist with ID ' + this.props.match.params.id ) {
                this.setState({
                    isFetching: false,
                    notes: []
                })
            } 
            else {
                this.setState({
                isFetching: true,
                notes: data
            });
            }
            console.log(data.cod)
		})
		.catch(err => {
		   console.log(err);
        })	
    }

    componentDidMount() {
        this.GetBook();
        this.GetNotes();

    }

    render() {
        return(
            <div>
            <div className="dbBookContainer">
                <div className="bookHeader">
                    <h2>{this.state.book.Title} {' By '} {this.state.book.Author}</h2>
                    <p>You finished this book on: {this.state.book.DateRead}</p>
                    <p>{this.state.book.ID}</p>
                    <Link to="/dbreadbooks" className="btn">Back</Link>
                </div>

                <div className="noteList">
                    <h2>Notes on book</h2>
                    {//<Link to="/dbaddnote" className="btn" bookdata={this.state.book}>New note</Link>
                    }
                    <Link className="btn" to={{pathname:"/dbaddnote", bookObject: this.state.book}}>Add note</Link>
                    <DBNoteList notes={this.state.notes}/>
                </div>
            </div>
      </div>
    )    
    }
}
