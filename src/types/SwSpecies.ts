import { SwapiItem } from './SwapiItem';
import { SwapiUrl } from './SwapiUrl';

export interface SwSpecies extends SwapiItem {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: SwapiUrl;
  language: string;
  people: SwapiUrl[];
  films: SwapiUrl[];
}
