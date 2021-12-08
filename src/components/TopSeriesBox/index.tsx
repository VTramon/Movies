/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TopMoviesBoxProps } from '../../Types';
import { TopCard } from '../TopCard';

const TopSeriesBox = () => {
  const [movies, setMovies] = useState<TopMoviesBoxProps[]>();

  const OnLoadPage = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularTVs/k_h4m9g5ee`
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

export { TopSeriesBox };
