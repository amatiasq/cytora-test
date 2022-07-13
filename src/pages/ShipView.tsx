import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { FavoriteButton } from '../components/FavoriteButton';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwShip } from '../types/SwShip';

export function ShipView() {
  const { id: routeId } = useParams();
  const [ship] = useSwapi<SwShip | null>(`/ships/${routeId}`, null);

  if (!ship) {
    return <Spinner />;
  }

  return (
    <Content>
      <header>
        <h2>{ship.name}</h2>
        <FavoriteButton item={ship} />
      </header>

      <dl>
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
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={ship.films} />
        <SwapiLinkSet title="Pilots" kind="character" items={ship.pilots} />
      </nav>
    </Content>
  );
}
