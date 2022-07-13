import { SwapiItem } from '../types/SwapiItem';
import { SwapiUrl } from '../types/SwapiUrl';

export function id(target: SwapiItem | SwapiUrl) {
  const url = typeof target === 'string' ? target : target.url;
  return url.split('/').filter(Boolean).pop();
}
