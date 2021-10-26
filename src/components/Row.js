import React, { useState, useEffect, createRef } from 'react';
import axios from '../axios';
import './Row.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, requestPath, isLargePoster }) {
  const baseImgPath = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  const containerRef = createRef();

  useEffect(() => {
    async function getMovieData() {
      const { data } = await axios.get(requestPath);
      setMovies(data.results);
      return data.results;
    }
    getMovieData();
  }, [requestPath]);

  function scrollDirection(direction) {
    if (direction === 'left') {
      containerRef.current.scrollLeft -= 1000;
    } else {
      containerRef.current.scrollLeft += 1000;
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <button onClick={() => scrollDirection('left')}>
        <MdChevronLeft />
      </button>
      <div id='movieContainer'>
        <div ref={containerRef} className='movies'>
          {movies.map((movie, index) => (
            <img
              className={
                'movies__image ' + (isLargePoster ? 'movies__largeposter' : '')
              }
              key={index}
              src={
                baseImgPath +
                (isLargePoster ? movie.poster_path : movie.backdrop_path)
              }
              alt={movie.title}
            />
          ))}
        </div>
        <button onClick={() => scrollDirection('right')}>
          <MdChevronRight />
        </button>
      </div>
    </>
  );
}

export default Row;
