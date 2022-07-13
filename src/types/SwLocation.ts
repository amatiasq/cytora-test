// Generated by https://quicktype.io

import { SwapiItem } from './SwapiItem';
import { SwapiUrl } from './SwapiUrl';

export interface SwLocation extends SwapiItem {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: SwapiUrl[];
  films: SwapiUrl[];
}
