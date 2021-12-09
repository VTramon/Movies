import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Header } from 'src/components/Header';
import { PopularMovies } from 'src/components/PopularMovies';
import { PopularSeries } from 'src/components/PopularSeries';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [series, setSeries] = useState(false);
  const [movies, setMovies] = useState(false);

  const RenderTopBox = (value: string) => {
    if (value === 'movies') {
      setSeries(false);
      setMovies(true);
    } else if (value === 'series') {
      setMovies(false);
      setSeries(true);
    }
    return;
  };

  return (
    <main className={styles.layout}>
      <Header CalbackFunction={RenderTopBox} />
      {movies == true ? <PopularMovies /> : undefined}
      {series == true ? <PopularSeries /> : undefined}
    </main>
  );
};

export default Home;
