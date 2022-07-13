import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { DetailList } from '../components/DetailList';
import { ItemToggle } from '../components/ItemToggle';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwShip } from '../types/SwShip';

export function ShipView() {
  const { id: routeId } = useParams();
  const [ship] = useSwapi<SwShip | null>(`/starships/${routeId}`, null);

  if (!ship) {
    return <Spinner />;
  }

  return (
    <Content>
      <ItemToggle item={ship}>{ship.name}</ItemToggle>

      <DetailList>
        <Detail label="Model" value={ship.model} />
        <Detail label="Manufacturer" value={ship.manufacturer} />
        <Detail label="Length" value={ship.length} />
        <Detail label="Crew" value={ship.crew} />
        <Detail label="Passengers" value={ship.passengers} />
        <Detail
          label="Max atmosphering speed"
          value={ship.max_atmosphering_speed}
        />
        <Detail label="Cargo capacity" value={ship.cargo_capacity} />
        <Detail label="Consumables" value={ship.consumables} />
        <Detail label="Ship class" value={ship.starship_class} />
      </DetailList>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={ship.films} />
        <SwapiLinkSet title="Pilots" kind="character" items={ship.pilots} />
      </nav>
    </Content>
  );
}
