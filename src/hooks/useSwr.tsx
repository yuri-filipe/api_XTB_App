import useSWR from 'swr';
import api from '../services/api';

export default function useFetch<Data = any, Error = any>(
  url: string,
  body: any,
) {
  const {data, error, mutate} = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.post(url, body);

      return response.data;
    },
    {refreshInterval: 1000},
  );

  return {data, error, mutate};
}
