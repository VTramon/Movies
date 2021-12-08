/* eslint-disable @next/next/no-img-element */
import { TopMoviesCardProps } from '../../Types';
import Image from 'next/image';

const TopCard = (props: TopMoviesCardProps) => {
  return (
    <div>
      {props.items.image ? (
        <img src={props.items.image} alt={props.items.title} />
      ) : undefined}
      <h3>{props.items.title}</h3>
      <p>{props.items.rank}</p>
    </div>
  );
};

export { TopCard };
