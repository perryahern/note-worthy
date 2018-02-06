// import actions
import {
  FETCHING_NOTES, FETCHED_NOTES,
  ADDING_NOTE, ADDED_NOTE,
  ERROR,
} from '../actions';

const initialState = {
  notes:    [],
  fetching: false,
  fetched:  false,
  adding:   false,
  added:    false,
  error:    null,
};

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return { ...state, fetching: true };
    case FETCHED_NOTES:
      return {
        ...state,
        notes: action.payload,
        fetched: true,
        fetching: false,
      }
    case ADDING_NOTE:
      return { ...state, adding: true };
    case ADDED_NOTE:
      return {
        ...state,
        notes: action.payload,
        added: true,
        adding: false,
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