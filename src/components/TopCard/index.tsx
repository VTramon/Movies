/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { TopMoviesCardProps } from '../../Types';
import styles from './styles.module.scss';

const TopCard = (props: TopMoviesCardProps) => {
  return (
    <Link href={`/${props.items.id}`} passHref>
      <div className={styles.card} key={`${props.items.id}+card`}>
        {props.items.image ? (
          <img
            src={props.items.image}
            alt={props.items.title}
            key={`${props.items.id}+image`}
          />
        ) : undefined}
        <h3 key={`${props.items.id}+title`}>{props.items.title}</h3>
      </div>
    </Link>
  );
};

export { TopCard };
