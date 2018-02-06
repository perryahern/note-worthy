// import actions
import { FETCHING, FETCHED, ERROR } from '../actions';

// import temporary data file
// import { notesData } from '../notes-data.js';

const initialState = {
  notes: [],
  fetching: false,
  fetched: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case FETCHED:
      return {
        ...state,
        notes: action.payload,
        fetched: true,
        fetching: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      }
    default:
      return state;
  }
};