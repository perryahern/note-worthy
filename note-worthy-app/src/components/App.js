import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNotes, deleteNote, editNote } from '../actions';
import NoteInput from '../components/NoteInput';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-subtitle">If it's of note, it's</h3>
          <h1 className="App-title">Note-worthy</h1>
        </header>
        <NoteInput />
        <ul>
          {this.props.notes.map((note, index) => {
            return (
              <li key={index}>
                <div>Author: {note.author}</div>
                <div>Title: {note.title}</div>
                <div>Body: {note.body}</div>
                <button onClick={() => {this.props.deleteNote(this.props.notes, index)}}>Delete note</button>
                <button onClick={() => {this.props.editNote(this.props.notes, index)}}>Edit note</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notesReducer.notes,
    fetching: state.notesReducer.fetching,
    error: state.notesReducer.error,
  }
}

export default connect(mapStateToProps, { getNotes, deleteNote, editNote })(App);
