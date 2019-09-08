import React from 'react'
import ReactDOM from 'react-dom'
import './dbAddNote.css';
import MyEditor from '../textEditor/textEditor'
import { Link } from 'react-router-dom'





const DBAddNote = () => { 
    return (
    <div className="addNoteContainer">
        <header>
            <h1>Add a new note</h1>
            <Link to="/dbreadbooks" className="btnBookNewNote">Back</Link>
        </header>
        <div className="textEditorContainer">
            <MyEditor></MyEditor>
        </div>
    </div>
      )
    }
export default DBAddNote;