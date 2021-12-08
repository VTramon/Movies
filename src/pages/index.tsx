import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TopBox } from '../components/TopBox';
import { TopCard } from '../components/TopCard';
import styles from '../styles/Home.module.scss';
import { TopMoviesBoxProps } from '../Types';

const Home: NextPage = () => {
  const [series, setSeries] = useState<TopMoviesBoxProps[]>();
  const [movies, setMovies] = useState<TopMoviesBoxProps[]>();

  const LoadSeries = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularTVs/k_h4m9g5ee`
    );
    const data = response.data['items'];
    setSeries(data);
  };

  const LoadMovies = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/k_h4m9g5ee`
    );
    const data = response.data['items'];
    setMovies(data);
  };

  useEffect(() => {
    LoadSeries();
    LoadMovies();
  }, []);

  return (
    <div className={styles.layout}>
      <TopBox>
        {!!series
          ? series.map((serie, index) => {
              return <TopCard items={serie} key={index} />;
            })
          : undefined}
      </TopBox>
    </div>
  );
};

export default Home;
