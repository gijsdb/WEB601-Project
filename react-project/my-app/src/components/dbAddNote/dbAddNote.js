import React from 'react'
import './dbAddNote.css';
import MyEditor from '../textEditor/textEditor'
import { Link } from 'react-router-dom'


// The page where the user can add a note to a book through the text editor which lives in the component MyEditor
// Currently not connected to the backend

export default class DBAddNote extends React.Component {
    render() {
        return(
            <div className="addNoteContainer">
                <div className="bookHeader">
                    <h1>Add a new note</h1>
                    <Link to="/dbreadbooks" className="btn">Back</Link>
                </div>
                <div className="textEditorContainer">
                    <MyEditor></MyEditor>
                </div>
                <button className="btn">Add note</button>
            </div>
        )
    }
}
