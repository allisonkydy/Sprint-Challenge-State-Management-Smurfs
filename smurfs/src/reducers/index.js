import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_START,
  POST_SUCCESS,
  POST_ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
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
    default:
      return state;
  }
};
