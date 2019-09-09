import React from 'react'
import ReactDOM from 'react-dom'
import './dbAddNote.css';
import MyEditor from '../textEditor/textEditor'
import { Link } from 'react-router-dom'





export default class DBAddNote extends React.Component {
    render() {
        return(
            <div className="addNoteContainer">
                <header>
                    <h1>Add a new note</h1>
                    <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
                </header>
                <div className="textEditorContainer">
                    <MyEditor></MyEditor>
                </div>
                <button className="btnBookNewNote">Add note</button>
            </div>
        )
    }
}
