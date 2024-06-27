import { useQuery } from '@tanstack/react-query';
import { api } from '../utils/api';

const fetchPopularTvSeries = () => {
  return api.get('/tv/popular');
};

export const usePopularTvSeriesQuery = () => {
  return useQuery({
    queryKey: ['popular-tv-series'],
    queryFn: fetchPopularTvSeries,
    select: (result) => result.data,
  });
};
