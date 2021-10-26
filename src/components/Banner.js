import axios from '../axios';
import React, { useEffect, useState } from 'react';
import requests from '../requests';
import './Banner.css';

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
        backgroundImage: `url(${baseImgPath}${movie?.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '500px',
      }}
    >
      {/* Banner title */}
      <h1>{movie?.title || movie?.name}</h1>
      <div className='banner__btn'>
        <button className='banner__btn--watchlist'>Add to Watchlist</button>
        <button className='banner__btn--play'>Play Now</button>
      </div>
      <p className='banner__overview'>{movie?.overview}</p>
      <div className='banner__overlay'></div>
    </div>
  );
}

export default Banner;
