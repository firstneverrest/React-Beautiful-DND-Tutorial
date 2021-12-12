import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Movie = ({ id, index, title, year, director }) => {
  return (
    <Draggable draggableId={id.toString()} index={index} key={id}>
      {(provided) => (
        <li
          className="movie"
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4>Title: {title}</h4>
          <p>Year: {year}</p>
          <p>Director: {director}</p>
        </li>
      )}
    </Draggable>
  );
};

export default Movie;
