/* eslint-disable @next/next/no-img-element */
import { TopMoviesCardProps } from '../../Types';
import styles from './styles.module.scss';

const TopCard = (props: TopMoviesCardProps) => {
  return (
    <div className={styles.card}>
      {props.items.image ? (
        <img src={props.items.image} alt={props.items.title} />
      ) : undefined}
      <h3>{props.items.title}</h3>
      <p>{props.items.rank}</p>
    </div>
  );
};

export { TopCard };
