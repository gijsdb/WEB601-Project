import React from 'react';
import './textEditor.css'
import {Editor, EditorState, RichUtils} from 'draft-js';

// The component which holds the text editor through which users can add notes on specific books
// The text editor I have used is draft-js
// Contains three buttons, BOLD, ITALIC and UNDERLINE to style the text

export default class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  _onUnderlineClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  render() {
    return (
        <div>
          <div className="txtEditBtnContainer">
            <button onClick={this._onBoldClick.bind(this)}>Bold</button>
            <button onClick={this._onItalicClick.bind(this)}>Italic</button>
            <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
          </div>
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
    );
  }
}

