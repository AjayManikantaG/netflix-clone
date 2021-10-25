import React, { useState, useEffect } from 'react';
import axios from '../axios';

function Row({ requestPath }) {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    async function getMovieData() {
      console.log(requestPath);
      const { data } = await axios.get(requestPath);
      setMovies(data.results);
    }
    getMovieData();
  }, [requestPath]);

  return (
    <div className='main'>
      {movies.map((item, index) => {
        return <h1>{item.title}</h1>;
      })}
    </div>
  );
}

export default Row;
