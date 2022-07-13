import { useEffect, useState } from 'react';
import { SwapiUrl } from '../types/SwapiUrl';
import { ClientStorage } from '../util/ClientStorage';

const storage = new ClientStorage('favourites', {
  default: new Set<string>(),
  serialise: (x) => JSON.stringify(Array.from(x)),
  deserialise: (x) => new Set(JSON.parse(x)),
});

const favourites = storage.read();

export function useFavorite(url: SwapiUrl) {
  const [isFavorite, setIsFavorite] = useState(favourites.has(url));

  useEffect(() => {
    const stored = favourites.has(url);

    if (stored !== isFavorite) {
      setIsFavorite(stored);
    }
  }, [url, isFavorite]);

  function toggle() {
    if (isFavorite) {
      favourites.delete(url);
    } else {
      favourites.add(url);
    }

    storage.write(favourites);
    setIsFavorite(!isFavorite);
  }

  return [isFavorite, toggle] as const;
}
