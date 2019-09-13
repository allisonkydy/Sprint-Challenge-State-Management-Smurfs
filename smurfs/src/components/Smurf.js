import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSmurf } from '../actions';

function Smurf({ smurf }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteSmurf(id));
  }

  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => handleDelete(smurf.id)}>delete smurf</button>
    </div>
  )
}

export default Smurf;
