import { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { transformResponse } from './utils';
import { SEARCH_END_POINT, LIMIT_PER_PAGE } from './constants';

export const useSearchPhotosService = () => {
  const [data, setData] = useState();
  const [formattedData, setFormattedData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const abortController = useRef(); 

  const fetch = useCallback(async (query = 'example', page = 1) => {
    try {

      if(abortController.current) {
        abortController.current.cancel();
      }
      setError();
      setLoading(true);
      abortController.current = axios.CancelToken.source();
      const response = await axios.get(
                    `${process.env.BASE_URL}/${SEARCH_END_POINT}?query=${query}&page=${page}&limit=${LIMIT_PER_PAGE}`,
                    { cancelToken: abortController.current.token });
      setData(response.data);
      setFormattedData(transformResponse({ query, page }, response.data));
    } catch (err) {
      if(axios.isCancel(err)) {
        return;
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return [{ data, formattedData, error, loading }, { fetch }]
}
