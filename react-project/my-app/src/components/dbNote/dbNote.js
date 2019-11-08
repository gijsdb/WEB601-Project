import React from 'react'
import './dbNote.css';
import { Link } from 'react-router-dom'


// The component which will display a note on a specific book
// Is currently not functional --> Work in progress



export default class DBNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            isFetching: false,
            note: [],
            book: []
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
		.catch(err => {
		   console.log(err);
        })	
    }

    GetNote() {
        fetch('http://localhost:4200/api/notes/' + this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            if(data.cod === '404') {
                this.setState({
                    isFetching: false,
                })
            } else {
                this.setState({
                isFetching: true,
                note: data[0]
            });
            }
        })
        .catch(err => {
           console.log(err);
        })	
    }

    componentDidMount() {
        this.GetBook();
        this.GetNote();
        console.log(this.state.book)
        console.log(this.state.note)
    }



    render() {
        return(
            <div className="noteContainer">
                <div className="bookHeader">
                    <h1>{this.state.note.Title}</h1>
                <Link className="btn" to={`/dbbook/${this.state.note.BookID}`}>Back</Link>
                </div>
                <div className="noteContent">
                    <p>
                        {this.state.note.Content}
                    </p>
                </div>
            </div>
        )
    }
}
