import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, addNote } from '../actions';

class NoteInput extends Component {
  // empty state
  state = {
    // id: null,
    author: '',
    title: '',
    body: '',
  }

  // inputChangeHandler
  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  // inputSubmitHandler
  inputSubmitHandler = (event) => {
    event.preventDefault();
    const { author, title, body } = this.state;
    this.setState({
      // id: null,
      author: '',
      title: '',
      body: '',
    })
    console.log('adding: ', author, title, body);
    this.props.addNote({ author, title, body });
    this.props.getNotes();
  }

  // render
  render() {
    return (
      <form onSubmit={this.inputSubmitHandler}>
        <input onChange={this.inputChangeHandler} placeholder='Author' name='author' value={this.state.author}></input>
        <input onChange={this.inputChangeHandler} placeholder='Title' name='title' value={this.state.title}></input>
        <input onChange={this.inputChangeHandler} placeholder='Body' name='body' value={this.state.body}></input>
        <button>Add note</button>
      </form>
    );
  };
};

// mSTP
// const mapStateToProps = state => {
//   return {

//   }
// }

// connect
export default connect(null, { getNotes, addNote })(NoteInput);