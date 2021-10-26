import React from 'react';
import Row from './Row';
import requests from '../requests';

function Rows() {
  return (
    <>
      <Row
        title='TRENDING NOW'
        requestPath={requests.fetchTrending}
        isLargePoster
      />
      <Row
        title='Netflix Originals'
        requestPath={requests.fetchNetflixOriginals}
      />
      <Row title='Top Rated' requestPath={requests.fetchTopRated} />
      <Row title='Action Movies' requestPath={requests.fetchActionMovies} />
      <Row title='Comedy movies' requestPath={requests.fetchComedyMovies} />
      <Row title='Horror Movies' requestPath={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' requestPath={requests.fetchRomanceMovies} />
      <Row title='Documentaries' requestPath={requests.fetchDocumentaries} />
    </>
  );
}

export default Rows;
