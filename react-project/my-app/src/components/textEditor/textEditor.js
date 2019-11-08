import React from 'react';
import './textEditor.css'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// The component which holds the text editor through which users can add notes on specific books
// The text editor I have used is draft-js
// Contains three buttons, BOLD, ITALIC and UNDERLINE to style the text

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      book: this.props.bookObject
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var convertedData = convertToRaw(this.state.editorState.getCurrentContent())
    console.log(convertedData);
    var bookID = this.state.book.ID
    fetch('http://localhost:4200/api/notes', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "Title": this.title.value,
             "Content": convertedData.blocks[0].text,
             "BookID": bookID
            })});
        alert("Note added");
        
    this.setState({editorState: EditorState.createEmpty()})
    this.title.value = "";
  }

  render() {

    return (
        <div>
            <label>
              <p>Title:</p>
              <input className="titleInput" ref={(ref) => {this.title = ref}} type="text" id="title" name="title" autocomplete="off"/>
            </label><br></br>
           
            <Editor editorState={this.state.editorState}  wrapperClassName="demo-wrapper" editorClassName="editer-content" onEditorStateChange={this.onChange} />
            <button onClick={this.handleSubmit} className="btn">Add note</button>
        </div>
    );
  }
}

