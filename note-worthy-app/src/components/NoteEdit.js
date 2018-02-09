import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, editNote } from '../actions';

class NoteEdit extends Component {
  // empty state
  state = {
    // id: null,
    author: '',
    title: '',
    body: '',
  }

  // editChangeHandler
  editChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  // editSubmitHandler
  editSubmitHandler = (event) => {
    event.preventDefault();
    const { author, title, body } = this.state;
    this.setState({
      id: null,
      author: '',
      title: '',
      body: '',
    })
    console.log('adding: ', author, title, body);
    this.props.editNote({ author, title, body });
    this.props.getNotes();
  }

  // render
  render() {
    return (
      <form onSubmit={this.editSubmitHandler}>
        <input onChange={this.editChangeHandler} placeholder='Author' name='author' value={this.state.author}></input>
        <input onChange={this.editChangeHandler} placeholder='Title' name='title' value={this.state.title}></input>
        <input onChange={this.editChangeHandler} placeholder='Body' name='body' value={this.state.body}></input>
        <button>Submit changes</button>
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
export default connect(null, { getNotes, editNote })(NoteEdit);