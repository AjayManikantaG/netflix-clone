import React, { useState, useEffect, createRef } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, requestPath, isLargePoster }) {
  const baseImgPath = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  const containerRef = createRef();

  useEffect(() => {
    async function getMovieData() {
      const { data } = await axios.get(requestPath);
      setMovies(data.results);
      console.log(data);
      return data.results;
    }
    getMovieData();
  }, []);

  function scrollRight() {
    containerRef.current.scrollLeft += 1000;
    console.log('In Scroll right', containerRef);
  }

  return (
    <>
      <h3>{title}</h3>
      <button onClick={scrollRight}>Scroll Right</button>
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
      </div>
    </>
  );
}

export default Row;
