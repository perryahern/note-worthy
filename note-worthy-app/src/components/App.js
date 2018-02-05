import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-subtitle">If it is of note, it's</h3>
          <h1 className="App-title">Note-worthy</h1>
        </header>
        <ul>
          {console.log('props: ', this.props)}
          {this.props.notes.map(note => {
            return (
              <li key={note.id}>
                <div>Author: {note.author}</div>
                <div>Title: {note.title}</div>
                <div>Body: {note.body}</div>
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
  }
}

export default connect(mapStateToProps)(App);
