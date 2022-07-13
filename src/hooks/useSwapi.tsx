import { useEffect, useState } from 'react';
import { ClientStorage } from '../util/ClientStorage';

const storage = new ClientStorage('swapi-cache', {
  default: new Map<string, unknown>(),
  serialise: (x) => JSON.stringify(Array.from(x)),
  deserialise: (x) => new Map(JSON.parse(x)),
});

const API_ROOT = 'https://swapi.dev/api';

const loading = new Map<string, Promise<unknown>>();
const cache = storage.read();

export function useSwapi<T>(path: string, initial: T) {
  const [data, setData] = useState<T>(initial);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abort = new AbortController();
    const url = path.startsWith(API_ROOT) ? path : `${API_ROOT}/${path}`;

    if (cache.has(url)) {
      setData(cache.get(url) as T);
      return;
    }

    if (!isLoading) {
      setIsLoading(true);
    }

    // If the request is already running we don't create another one, just reuse it
    const request = loading.get(url) as Promise<T> | null;
    const promise =
      request || fetch(url, { signal: abort.signal }).then((res) => res.json());

    if (!request) {
      loading.set(url, promise);
    }

    promise
      .then((x) => {
        cache.set(url, x);
        setData(x);
        storage.write(cache);
      })
      .finally(() => setIsLoading(false));

    return () => abort.abort();

    // We don't want to re-run the effect if `isLoading` changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return [data, isLoading] as const;
}
