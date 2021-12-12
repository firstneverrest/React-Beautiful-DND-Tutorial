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
                  <Draggable
                    draggableId={movie.id.toString()}
                    index={index}
                    key={movie.id}
                  >
                    {(provided) => (
                      // <Movie
                      //   key={movie.id}
                      //   title={movie.title}
                      //   year={movie.year}
                      //   director={movie.director}
                      //   {...provided.draggableProps}
                      //   {...provided.dragHandleProps}
                      //   ref={provided.innerRef}
                      // />
                      <li
                        className="movie"
                        key={movie.id}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <h4>Title: {movie.title}</h4>
                        <p>Year: {movie.year}</p>
                        <p>Director: {movie.director}</p>
                      </li>
                    )}
                  </Draggable>
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
