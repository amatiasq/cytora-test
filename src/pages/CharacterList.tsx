import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FavoriteButton } from '../components/FavoriteButton';
import { SwapPaginatedList } from '../components/SwapPaginatedList';
import { SwCharacter } from '../types/SwCharacter';
import { id } from '../util/id';

const Container = styled.li`
  list-style: none;
  width: 20em;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-radius: 0.5rem;
  gap: 2rem;
  transition: background-color 0.2s;

  :hover {
    background-color: rgba(0 0 0 / 0.2);
    cursor: pointer;
  }
`;

export function CharacterList() {
  return (
    <SwapPaginatedList apiPath="/people">
      {(character: SwCharacter) => (
        <Container key={character.url}>
          <Link to={`/character/${id(character)}`}>
            <Header>
              <FavoriteButton item={character} />
              <h4>{character.name}</h4>
            </Header>
          </Link>
        </Container>
      )}
    </SwapPaginatedList>
  );
}
