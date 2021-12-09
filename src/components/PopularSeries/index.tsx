import axios from 'axios';
import { useEffect, useState } from 'react';
import { TopBox } from 'src/components/TopBox';
import { TopCard } from 'src/components/TopCard';
import { TopMoviesBoxProps } from 'src/Types';

const PopularSeries = () => {
  const [series, setSeries] = useState<TopMoviesBoxProps[]>();

  const LoadSeries = async () => {
    const response = await axios.get(
      `https://imdb-api.com/en/API/MostPopularTVs/k_h4m9g5ee`
    );
    const data = response.data['items'];
    setSeries(data);
  };

  useEffect(() => {
    LoadSeries();
  }, []);
  return (
    <TopBox dataTestId="series">
      {!!series
        ? series.map((serie, index) => {
            return <TopCard items={serie} key={index} />;
          })
        : undefined}
    </TopBox>
  );
};

export { PopularSeries };
