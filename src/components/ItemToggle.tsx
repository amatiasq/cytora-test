import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { SwapiItem } from '../types/SwapiItem';
import { FavoriteButton } from './FavoriteButton';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export interface ItemToggleProps {
  item: SwapiItem;
  children: ReactNode;
}

export function ItemToggle({ item, children }: ItemToggleProps) {
  return (
    <Container>
      <h2>{children}</h2>
      <FavoriteButton item={item} />
    </Container>
  );
}
