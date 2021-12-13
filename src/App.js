import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import data from './data.json';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState(data.movies);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const newMovies = [...movies];
    const [reorderedItem] = newMovies.splice(result.source.index, 1);
    newMovies.splice(result.destination.index, 0, reorderedItem);

    setMovies(newMovies);
  };

  return (
    <div className="App">
      <h2>Movies List</h2>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="movies">
          {(provided, snapshot) => (
            <ul
              className={`movie-list ${
                snapshot.isDraggingOver ? 'dragging-over' : ''
              }`}
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
      <p className="copyright">Copyright © 2021 Chitsanupong Tangvasinkul</p>
    </div>
  );
}

export default App;
