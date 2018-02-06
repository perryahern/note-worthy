// axios for HTTP requests
// import axios from 'axios';

// temp import data pre-HTTP implementation
import { notesData } from '../notes-data.js';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const getNotes = () => {
  const notes = notesData;
  return dispatch => {
    dispatch({ type: FETCHING });
    if (notes) dispatch({ type: FETCHED, payload: notes });  // .then
    else dispatch({ type: ERROR, payload: 'No data'});       // .catch
  }
};