import React from 'react';
import MovieElement from '../movie-element/movie-element.component';

const MoviesGrid = ({ data }) => {
  let { Search, totalResults } = data;
  return (
    <>
      <div>{`Numero de resultados = ${totalResults ? totalResults : 0}`}</div>
      {Search === undefined
        ? null
        : Search.map(({ Title, Year, Poster }) => (
            <MovieElement title={Title} year={Year} poster={Poster} />
          ))}
    </>
  );
};

export default MoviesGrid;

// Title: "Captain America: The First Avenger", Year: "2011", imdbID: "tt0458339", Type: "movie", Poster:
