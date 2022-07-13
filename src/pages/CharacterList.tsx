import styled from '@emotion/styled';
import { FavoriteButton } from '../components/FavoriteButton';
import { SwapPaginatedList } from '../components/SwapPaginatedList';
import { Character } from '../types/Character';

const Container = styled.li`
  list-style: none;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export function CharacterList() {
  return (
    <SwapPaginatedList apiPath="/people">
      {(character: Character) => (
        <Container key={character.url}>
          <Header>
            <FavoriteButton item={character} />
            <h4>{character.name}</h4>
          </Header>
        </Container>
      )}
    </SwapPaginatedList>
  );
}
