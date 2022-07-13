import { SwapiItem } from './SwapiItem';
import { SwapiUrl } from './SwapiUrl';

export type Gender = 'female' | 'male' | 'n/a';

export interface SwCharacter extends SwapiItem {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: SwapiUrl;
  films: SwapiUrl[];
  species: SwapiUrl[];
  vehicles: SwapiUrl[];
  starships: SwapiUrl[];
}
