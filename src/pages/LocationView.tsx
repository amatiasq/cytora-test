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

      <dl>
        <dt>Diameter:</dt>
        <dd>{location.diameter}</dd>
        <dt>Climate:</dt>
        <dd>{location.climate}</dd>
        <dt>Terrain:</dt>
        <dd>{location.terrain}</dd>
        <dt>Surface water:</dt>
        <dd>{location.surface_water}</dd>
        <dt>Population:</dt>
        <dd>{location.population}</dd>
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={location.films} />

        <SwapiLinkSet
          title="Residents"
          kind="character"
          items={location.residents}
        />
      </nav>
    </Content>
  );
}
