import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import data from './data.json';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState(data.movies);

  return (
    <div className="App">
      <h2>Movies List</h2>
      <DragDropContext>
        <Droppable droppableId="movies">
          {(provided) => (
            <ul
              className="movie-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {movies.map((movie, index) => {
                return (
                  <Movie
                    id={movie.id}
                    index={index}
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    director={movie.director}
                  />
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
