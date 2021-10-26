import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../requests';

function Banner() {
  const [movie, setMovie] = useState({});
  const baseImgPath = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function getBannerMovie() {
      const { data } = await axios.get(requests.fetchTrending);
      const selectedMovie =
        data.results[Math.floor(Math.random() * data.results.length - 1)];
      setMovie(selectedMovie);
    }
    getBannerMovie();
  }, []);

  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url(${baseImgPath}${movie.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '500px',
      }}
    >
      {/* Banner title */}
      <h2>{movie.title}</h2>
    </div>
  );
}

export default Banner;
