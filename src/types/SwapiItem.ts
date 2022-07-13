import { SwapiUrl } from './SwapiUrl';

export interface SwapiItem {
  url: SwapiUrl;
  created: string;
  edited: string;
  name?: string;
  title?: string;
}
