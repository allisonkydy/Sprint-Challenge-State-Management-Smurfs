import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

const initialState = {
  smurfs: [],
  isFetching: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isFetching: false
      }
    default:
      return state;
  }
}