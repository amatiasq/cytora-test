import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
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
        <Detail label="Diameter" value={location.diameter} />
        <Detail label="Climate" value={location.climate} />
        <Detail label="Terrain" value={location.terrain} />
        <Detail label="Surface water" value={location.surface_water} />
        <Detail label="Population" value={location.population} />
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
