import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from 'src/components/Header';
import { Modal } from 'src/components/Modal';
import { PopularMovies } from 'src/components/PopularMovies';
import { PopularSeries } from 'src/components/PopularSeries';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const [series, setSeries] = useState(false);
  const [movies, setMovies] = useState(false);
  const [modal, setModal] = useState<boolean>();

  const RenderTopBox = (value: string) => {
    if (value === 'movies') {
      setSeries(false);
      setMovies(!movies);
    } else if (value === 'series') {
      setMovies(false);
      setSeries(!series);
    }
    return;
  };

  const HandleModal = () => {
    setModal(!modal);
  };

  const OnLoadPage = () => {
    const LocalStorage = window.localStorage.getItem('first_access');

    if (LocalStorage == null) {
      window.localStorage.setItem('first_access', 'false');
      setModal(true);
    }
  };

  useEffect(() => {
    OnLoadPage();
  }, []);

  return (
    <main className={styles.layout}>
      <Header CalbackFunction={RenderTopBox} />

      {modal == true ? <Modal callbackFunction={HandleModal} /> : null}
      {movies == true ? <PopularMovies /> : null}
      {series == true ? <PopularSeries /> : null}
    </main>
  );
};

export default Home;
