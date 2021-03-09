import { useEffect, useState } from 'react';
import debounce from '../utils/debounce';

const fetchData = (setData, value) => fetch(`https://jsonplaceholder.typicode.com/users${value ? `?username=${encodeURIComponent(value)}` : ''}`)
  .then(async (response) => {
    const result = await response.json();
    setData(result);
  });

const debounceFn = debounce((setData, value) => fetchData(setData, value));

function useFetchUsers(value) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!value) {
      fetchData(setData, value);
    } else {
      debounceFn(setData, value);
    }
  }, [value]);

  return data;
}


export default useFetchUsers;
