import { SwapiItem } from './SwapiItem';
import { SwapiUrl } from './SwapiUrl';

export interface SwShip extends SwapiItem {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: SwapiUrl[];
  films: SwapiUrl[];
}
