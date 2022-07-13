import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { DetailList } from '../components/DetailList';
import { ItemToggle } from '../components/ItemToggle';
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
      <ItemToggle item={location}>{location.name}</ItemToggle>

      <DetailList>
        <Detail label="Diameter" value={location.diameter} />
        <Detail label="Climate" value={location.climate} />
        <Detail label="Terrain" value={location.terrain} />
        <Detail label="Surface water" value={location.surface_water} />
        <Detail label="Population" value={location.population} />
      </DetailList>

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
