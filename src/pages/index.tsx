import type { NextPage } from 'next';
import { TopMoviesBox } from '../components/TopMoviesBox';
import { TopSeriesBox } from '../components/TopSeriesBox';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <TopMoviesBox />
      <TopSeriesBox />
    </div>
  );
};

export default Home;
