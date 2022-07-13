import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSwapi } from '../hooks/useSwapi';
import { SwapiItem } from '../types/SwapiItem';
import { SwapiKinds } from '../types/SwapiKinds';
import { SwapiUrl } from '../types/SwapiUrl';
import { id } from '../util/id';
import { FavoriteButton } from './FavoriteButton';

const Container = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  --icon-size: 1.3em;
`;

export interface SwapiLinkProps {
  kind: SwapiKinds;
  url: SwapiUrl;
}

export function SwapiLink({ kind, url }: SwapiLinkProps) {
  const [item] = useSwapi<SwapiItem | null>(url, null);

  if (!item) {
    return null;
  }

  return (
    <Container>
      <FavoriteButton item={item} />
      <Link to={`/${kind}/${id(url)}`}>{item.name || item.title}</Link>
    </Container>
  );
}
