import React from 'react';

function Smurf({ smurf }) {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>
    </div>
  )
}

export default Smurf;
