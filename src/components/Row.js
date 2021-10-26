import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

function Row({ title, requestPath }) {
  const baseImgPath = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      const { data } = await axios.get(requestPath);
      setMovies(data.results);
      console.log(data);
      return data.results;
    }
    getMovieData();
  }, []);

  return (
    <>
      <h3>{title}</h3>
      <div className='movies'>
        {movies.map((movie, index) => (
          <img
            className='movies__image'
            key={index}
            src={baseImgPath + movie.backdrop_path}
            alt={movie.title}
          />
        ))}
      </div>
    </>
  );
}

export default Row;
