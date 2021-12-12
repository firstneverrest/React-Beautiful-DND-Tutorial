import React from 'react';

const Movie = ({ title, year, director }) => {
  return (
    <li className="movie">
      <h4>Title: {title}</h4>
      <p>Year: {year}</p>
      <p>Director: {director}</p>
    </li>
  );
};

export default Movie;
