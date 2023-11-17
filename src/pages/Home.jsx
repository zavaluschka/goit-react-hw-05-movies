import React, { useState, useEffect } from 'react';
import { getMovieTrends } from 'Api';
import { MovieList } from 'components/MovieList/MovieList';
import home from './Home.module.css';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const response = await getMovieTrends();
        setMoviesData(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getTrends();
  }, []);

  return (
    <div className={home.container}>
      <h1 className={home.title}>Trends this day</h1>
      <MovieList moviesData={moviesData} />
    </div>
  );
};

export default Home;