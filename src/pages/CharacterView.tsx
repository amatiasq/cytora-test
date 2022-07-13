import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { FavoriteButton } from '../components/FavoriteButton';
import { Spinner } from '../components/Spinner';
import { SwapiLink } from '../components/SwapLink';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwCharacter } from '../types/SwCharacter';

export function CharacterView() {
  const { id: routeId } = useParams();
  const [character] = useSwapi<SwCharacter | null>(`/people/${routeId}`, null);

  if (!character) {
    return <Spinner />;
  }

  return (
    <Content>
      <header>
        <h2>{character.name}</h2>
        <FavoriteButton item={character} />
      </header>

      <dl>
        <Detail label="Birth year" value={character.birth_year} />
        <Detail label="Eye color" value={character.eye_color} />
        <Detail label="Hair color" value={character.hair_color} />
        <Detail label="Height" value={character.height} />
        <Detail label="Mass" value={character.mass} />
      </dl>

      <nav>
        <h3>Homeworld</h3>
        <SwapiLink kind="location" url={character.homeworld} />

        <SwapiLinkSet
          title="Related films"
          kind="film"
          items={character.films}
        />

        <SwapiLinkSet
          title="Species"
          kind="species"
          items={character.species}
        />

        <SwapiLinkSet
          title="Vehicles"
          kind="vehicle"
          items={character.vehicles}
        />

        <SwapiLinkSet
          title="Starships"
          kind="ship"
          items={character.starships}
        />
      </nav>
    </Content>
  );
}
