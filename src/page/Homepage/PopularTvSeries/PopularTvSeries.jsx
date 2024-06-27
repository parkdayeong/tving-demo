import React from 'react';
import { usePopularTvSeriesQuery } from '../../../hooks/usePopularTvSeries';

const PopularTvSeries = () => {
  const { data, isLoading, isError, error } = usePopularTvSeriesQuery();
  console.log('popTv', data);
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  return (
    <div>
      <h3>재밌는 TV Series</h3>
    </div>
  );
};

export default PopularTvSeries;
