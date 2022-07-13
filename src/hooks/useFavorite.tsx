import { useEffect, useState } from 'react';

const favourite = new Set(readStorage());

export function useFavorite(url: string) {
  const [isFavorite, setIsFavorite] = useState(favourite.has(url));

  useEffect(() => {
    const stored = favourite.has(url);

    if (stored !== isFavorite) {
      setIsFavorite(stored);
    }
  }, [url, isFavorite]);

  function toggle() {
    if (isFavorite) {
      favourite.delete(url);
    } else {
      favourite.add(url);
    }

    writeStorage();
    setIsFavorite(!isFavorite);
  }

  return [isFavorite, toggle] as const;
}

function readStorage() {
  const stored = localStorage.getItem('favourites');

  return stored ? JSON.parse(stored) : [];
}

function writeStorage() {
  const json = JSON.stringify(Array.from(favourite));
  localStorage.setItem('favourites', json);
}
