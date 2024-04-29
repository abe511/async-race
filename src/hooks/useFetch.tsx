import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    let controller: AbortController | null = null;
    if (typeof AbortController !== 'undefined') {
      controller = new AbortController();
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: controller ? controller.signal : null });
        if (!response.ok) throw new Error('Failed to fetch data');
        const json = await response.json();
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setLoading(false);
          if (err instanceof Error) setError(err.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      setData(null);
      if (controller) controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
