// axios for HTTP requests
// import axios from 'axios';

// temp import data pre-HTTP implementation
import { notesData } from '../notes-data.js';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const getNotes = () => {
  const notes = notesData;
  // console.log('notes-data: ', notesData);
  // console.log('notes - ', notes);
  return dispatch => {
    dispatch({ type: FETCHING });
    if (notes) {
      // console.log('in the if, about to dispatch: ', notes);
      dispatch({ type: FETCHED, payload: notes });
    } else {
      dispatch({ type: ERROR, payload: 'No data'});
    }
  }
};