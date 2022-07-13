import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
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
        <dt>Model:</dt>
        <dd>{ship.model}</dd>
        <dt>Manufacturer:</dt>
        <dd>{ship.manufacturer}</dd>
        <dt>Length:</dt>
        <dd>{ship.length}</dd>
        <dt>Crew:</dt>
        <dd>{ship.crew}</dd>
        <dt>Passengers:</dt>
        <dd>{ship.passengers}</dd>
        <dt>Max atmosphering speed:</dt>
        <dd>{ship.max_atmosphering_speed}</dd>
        <dt>Cargo capacity:</dt>
        <dd>{ship.cargo_capacity}</dd>
        <dt>Consumables:</dt>
        <dd>{ship.consumables}</dd>
        <dt>Ship class:</dt>
        <dd>{ship.starship_class}</dd>
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={ship.films} />
        <SwapiLinkSet title="Pilots" kind="character" items={ship.pilots} />
      </nav>
    </Content>
  );
}
