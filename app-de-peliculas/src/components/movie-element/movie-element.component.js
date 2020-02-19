import React from 'react';

const MovieElement = ({ title, poster, year }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={poster} alt="" />
    </div>
  );
};

export default MovieElement;
