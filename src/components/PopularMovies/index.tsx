import axios from 'axios';
import { useEffect, useState } from 'react';
import { TopMoviesBoxProps } from 'src/Types';
import { TopBox } from '../TopBox';
import { TopCard } from '../TopCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState<TopMoviesBoxProps[]>();

  const LoadMovies = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/k_h4m9g5ee`
    );
    const data = response.data['items'];
    setMovies(data);
  };

  useEffect(() => {
    LoadMovies();
  }, []);
  return (
    <TopBox dataTestId="movies">
      {!!movies
        ? movies.map((movie, index) => {
            return <TopCard items={movie} key={index} />;
          })
        : undefined}
    </TopBox>
  );
};
export { PopularMovies };
