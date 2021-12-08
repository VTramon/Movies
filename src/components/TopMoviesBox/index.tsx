/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { type } from 'os';
import { useEffect, useState } from 'react';
import { TopMoviesBoxProps, TopMoviesCardProps } from '../../Types';
import { TopCard } from '../TopCard';

const TopMoviesBox = () => {
  const [movies, setMovies] = useState<TopMoviesBoxProps[]>();

  const OnLoadPage = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/k_h4m9g5ee`
    );

    const data = response.data['items'];
    setMovies(data);
  };

  useEffect(() => {
    OnLoadPage();
  }, []);

  return (
    <section>
      {!!movies
        ? movies.map((movie, index) => {
            return <TopCard items={movie} key={index} />;
          })
        : undefined}
    </section>
  );
};

export { TopMoviesBox };
