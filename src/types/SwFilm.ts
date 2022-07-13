import { SwapiItem } from './SwapiItem';
import { SwapiUrl } from './SwapiUrl';

export interface SwFilm extends SwapiItem {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: SwapiUrl[];
  planets: SwapiUrl[];
  starships: SwapiUrl[];
  vehicles: SwapiUrl[];
  species: SwapiUrl[];
}
