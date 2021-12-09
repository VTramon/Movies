import styles from './styles.module.scss';

type HeaderProps = {
  CalbackFunction: (event: string) => void;
};

const Header: React.FC<HeaderProps> = ({ CalbackFunction }) => {
  return (
    <div className={styles.header}>
      <h1>Most Populars</h1>
      <div className={styles.links}>
        <button
          onClick={(event) => CalbackFunction(event.currentTarget.value)}
          value={'movies'}
        >
          Movies
        </button>
        <button
          onClick={(event) => CalbackFunction(event.currentTarget.value)}
          value={'series'}
        >
          TV Series
        </button>
      </div>
    </div>
  );
};

export { Header };
