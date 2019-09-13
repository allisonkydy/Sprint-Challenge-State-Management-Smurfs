import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_START,
  POST_SUCCESS,
  POST_ERROR,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_ERROR,
  SET_SMURF_TO_EDIT
} from "../actions";

const initialState = {
  smurfs: [],
  smurfToEdit: null,
  isFetching: false,
  isPosting: false,
  isDeleteing: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isFetching: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case POST_START:
      return {
        ...state,
        isPosting: true,
        error: null
      };
    case POST_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isPosting: false
      };
    case POST_ERROR:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case DELETE_START:
        return {
          ...state,
          isDeleteing: true,
          error: null
        };
    case DELETE_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isDeleteing: false
      };
    case DELETE_ERROR:
      return {
        ...state,
        isDeleteing: false,
        error: action.payload
      };
    case SET_SMURF_TO_EDIT:
      return {
        ...state,
        smurfToEdit: action.payload
      }
    default:
      return state;
  }
};
