import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { FavoriteButton } from '../components/FavoriteButton';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwLocation } from '../types/SwLocation';

export function LocationView() {
  const { id: routeId } = useParams();
  const [location] = useSwapi<SwLocation | null>(`/planets/${routeId}`, null);

  if (!location) {
    return <Spinner />;
  }

  return (
    <Content>
      <header>
        <h2>{location.name}</h2>
        <FavoriteButton item={location} />
      </header>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={location.films} />

        <SwapiLinkSet
          title="Residents"
          kind="character"
          items={location.residents}
        />
      </nav>

      {/* <dl>
        <dt>Birth year:</dt>
        <dd>{location.birth_year}</dd>
        <dt>Eye color:</dt>
        <dd>{location.eye_color}</dd>
        <dt>Hair color:</dt>
        <dd>{location.hair_color}</dd>
        <dt>Height:</dt>
        <dd>{location.height}</dd>
        <dt>Mass:</dt>
        <dd>{location.mass}</dd>
      </dl> */}
    </Content>
  );
}
