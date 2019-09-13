import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import "./App.css";
import { getSmurfs } from '../actions';

function App() {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch])

  if (isFetching) return <h2>loading...</h2>

  if (error) return <img src={`https://http.cat/${error}`} alt={`error code: ${error}`} />

  return (
    <div className="App">
      <h1>smurf village</h1>
      {smurfs.map(smurf => {
        return (
          <div>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age} years</p>
            <p>Height: {smurf.height}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
