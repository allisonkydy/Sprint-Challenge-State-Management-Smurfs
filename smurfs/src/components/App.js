import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SmurfForm from "./SmurfForm";
import "./App.css";
import { getSmurfs } from "../actions";

function App() {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);
  const isFetching = useSelector(state => state.isFetching);
  const isPosting = useSelector(state => state.isPosting);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

  if (isFetching) return <h2>loading...</h2>;

  if (isPosting) return <h2>adding smurf...</h2>;

  if (error)
    return (
      <img src={`https://http.cat/${error}`} alt={`error code: ${error}`} />
    );

  return (
    <div className="App">
      <h1>smurf village</h1>
      <SmurfForm />
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age} years</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
