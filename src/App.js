import React, { useState } from 'react';
import data from './data.json';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState(data.movies);

  return (
    <div className="App">
      <h2>Movies List</h2>
      <ul className="movie-list">
        {movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              year={movie.year}
              director={movie.director}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
