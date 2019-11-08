import React from 'react'
import { Link } from 'react-router-dom'
import './dbNoteList.css';

// This component displays a tile for each book in the database on the DBReadBooks page
// Uses map to map each item from the books array to a "tile" and displays the corresponding information in each tile
// Gets passed the book array from the DBReadBooks component as a prop

export default class DBNoteList extends React.Component {

    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this)
  
    }

    
    deleteNote(id) {
        fetch('http://localhost:4200/api/notes' + '/' + id, {
          method: 'DELETE'
        }).then(response =>
          response.json().then(json => {
            return json;
          })
        );
        window.location.reload();
    }

    componentDidMount() {
     
    }

    
   
  
    // Maps out each book in the array books and displays a tile for it
    render() {
      var notes = this.props.notes.map((note)=>{
        return(
          <div key={note.ID} className="module">
          <h2><u>Title</u> </h2>
          <h3><Link to={`/dbnote/${note.ID}`}>{note.Title}</Link></h3>
          <button className="btn" onClick={this.deleteNote.bind(this,note.ID)}>Delete</button>
         </div>
            )
        });
      return(
        
        <div className='noteListContainer'>
            {notes.length ? notes : <p>No notes exist for this book</p>}
        </div>
      );
    }
}