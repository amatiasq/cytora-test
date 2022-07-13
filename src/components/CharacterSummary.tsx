import styled from '@emotion/styled';
import { Character } from '../types/Character';
import { FavoriteButton } from './FavoriteButton';

const Container = styled.li`
  list-style: none;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export interface CharacterSummaryProps {
  character: Character;
}

export function CharacterSummary({ character }: CharacterSummaryProps) {
  return (
    <Container>
      <Header>
        <FavoriteButton item={character} />
        <h4>{character.name}</h4>
      </Header>
    </Container>
  );
}
