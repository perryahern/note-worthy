// import actions
import {
  FETCHING_NOTES, FETCHED_NOTES,
  ADDING_NOTE, ADDED_NOTE,
  DELETING_NOTE, DELETED_NOTE,
  EDITING_NOTE, EDITED_NOTE,
  ERROR,
} from '../actions';

const initialState = {
  notes:    [],
  id: 0,
  fetching: false,
  fetched:  false,
  adding:   false,
  added:    false,
  deleting: false,
  deleted:  false,
  editing:  false,
  edited:   false,
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
        fetched:  true,
        fetching: false,
      }
    case ADDING_NOTE:
      return { ...state, adding: true };
    case ADDED_NOTE:
      return {
        ...state,
        notes: action.payload,
        added:  true,
        adding: false,
      }
    case DELETING_NOTE:
      return { ...state, deleting: true };
    case DELETED_NOTE:
      return {
        ...state,
        notes: action.payload,
        deleted:  true,
        deleting: false,
      }
      case EDITING_NOTE:
        return { ...state, editing: true }
      case EDITED_NOTE:
        return {
          ...state,
          notes: action.payload,
          edited: true,
          editing: false,
        }
      case ERROR:
      return {
        ...state,
        error: action.payload,
        fetching: false,
        adding:   false,
        deleting: false,
        editing:  false,
      }
    default:
      return state;
  }
};