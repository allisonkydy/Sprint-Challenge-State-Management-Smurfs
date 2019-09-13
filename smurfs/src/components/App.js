import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import "./App.css";
import { getSmurfs } from '../actions';

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch])

  if (isFetching) return <h2>loading...</h2>

  if (error) return <img src={`https://http.cat/${error}`} alt={`error code: ${error}`} />

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}

export default App;
