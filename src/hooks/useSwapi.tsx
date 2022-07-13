import { useEffect, useState } from 'react';

const API_ROOT = 'https://swapi.dev/api';

export function useSwapi<T>(path: string, initial: T) {
  const [data, setData] = useState<T>(initial);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abort = new AbortController();
    const url = path.startsWith(API_ROOT) ? path : `${API_ROOT}/${path}`;

    if (!isLoading) {
      setIsLoading(true);
    }

    fetch(url, { signal: abort.signal })
      .then((res) => res.json())
      .then(setData)
      .finally(() => setIsLoading(false));

    return () => abort.abort();

    // We don't want to re-run the effect if `isLoading` changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return [data, isLoading] as const;
}
