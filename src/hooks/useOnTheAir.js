import { api } from '../utils/api';
import { useQuery } from '@tanstack/react-query';

const fetchOntheAir = () => {
  return api.get('/tv/on_the_air');
};

export const useOnTheAirQuery = () => {
  return useQuery({
    queryKey: ['tv-on-the-air'],
    queryFn: fetchOntheAir,
    select: (result) => result.data,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.length === 0 ? undefined : pages.length;
    },
  });
};
