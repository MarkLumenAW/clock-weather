import useSWR from 'swr';
import axios from 'axios';

export const fetcher = url => axios.get(url).then(res => res.data);

export function timeGetter(timeURL) {
  const fetcher = url => axios.get(url).then(res => res.data);

  const { data, error } = useSWR(timeURL, fetcher, { refreshInterval: 1000 });

  if (data) {
    return data;
  }

  if (error) {
    console.log('Get time error: ', error);
  }
}