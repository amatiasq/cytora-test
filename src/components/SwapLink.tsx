import { Link } from 'react-router-dom';
import { useSwapi } from '../hooks/useSwapi';
import { SwapiItem } from '../types/SwapiItem';
import { SwapiUrl } from '../types/SwapiUrl';
import { id } from '../util/id';

export type SwapiKinds =
  | 'character'
  | 'location'
  | 'film'
  | 'vehicle'
  | 'species'
  | 'ship';

export interface SwapiLinkProps {
  kind: SwapiKinds;
  url: SwapiUrl;
}

export function SwapiLink({ kind, url }: SwapiLinkProps) {
  const [item] = useSwapi<SwapiItem | null>(url, null);

  if (!item) {
    return null;
  }

  return <Link to={`/${kind}/${id(url)}`}>{item.name || item.title}</Link>;
}
