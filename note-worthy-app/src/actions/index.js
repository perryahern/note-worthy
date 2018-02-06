// axios for HTTP requests
// import axios from 'axios';

// temp import data pre-HTTP implementation
import { notesData } from '../notes-data.js';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const  FETCHED_NOTES = "FETCHED_NOTES";
export const    ADDING_NOTE = "ADDING_NOTE";
export const     ADDED_NOTE = "ADDED_NOTE";
export const          ERROR = "ERROR";

export const getNotes = () => {
  const notes = notesData;
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    if (notes) dispatch({ type: FETCHED_NOTES, payload: notes });  // .then
    else dispatch({ type: ERROR, payload: 'No data'});             // .catch
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