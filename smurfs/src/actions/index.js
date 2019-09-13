import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR, payload: err.response.status });
    });
};

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: POST_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_ERROR, payload: err.response.status });
    });
};

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_ERROR, payload: err.response.status });
    })
}
