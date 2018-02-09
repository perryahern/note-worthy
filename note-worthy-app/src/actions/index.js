// axios for HTTP requests
// import axios from 'axios';

// temp import data pre-HTTP implementation
import { notesData } from '../notes-data.js';
import './index.css';
// import NoteEdit from '../components/NoteEdit';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const  FETCHED_NOTES = "FETCHED_NOTES";
export const    ADDING_NOTE = "ADDING_NOTE";
export const     ADDED_NOTE = "ADDED_NOTE";
export const  DELETING_NOTE = "DELETING_NOTE";
export const   DELETED_NOTE = "DELETED_NOTE";
export const   EDITING_NOTE = "EDITING_NOTE"
export const    EDITED_NOTE =  "EDITED_NOTE";
export const          ERROR = "ERROR";

export const getNotes = () => {
  const notes = notesData;
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    if (notes) dispatch({ type: FETCHED_NOTES, payload: notes });  // .then
    else dispatch({ type: ERROR, payload: 'No data retrieved'});             // .catch
  };
};

export const addNote = (note) => {
  const notes = notesData;
  notes.push(note);
  return dispatch => {
    dispatch({ type: ADDING_NOTE });
    if (note) dispatch({ type: ADDED_NOTE, payload: notes });
    else dispatch({ type: ERROR, payload: 'Note not added'});
  };
};

export const deleteNote = (notes, id) => {
  const newNotes = notes.filter((note, index) => {
    if (id !== index) return note;
    return null;
  });
  console.log(newNotes);
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    if (id !== null) dispatch({ type: DELETED_NOTE, payload: newNotes });
    else dispatch({ type: ERROR, payload: 'Note not deleted' });
  };
};

export const editNote = (notes, id) => {
  // do the edit form, change note info
  const newNotes = notes; // *** CHANGE THIS, TEMP PLACEHOLDER ***
  console.log('***** EDIT BUTTON CLICKED ON NOTE #', id, '*****');
  return dispatch => {
    dispatch({ type: EDITING_NOTE });
    if (id !== null) dispatch({ type: EDITED_NOTE, payload: newNotes });
    else dispatch({ type: ERROR, payload: 'Note not edited' });
  };
};