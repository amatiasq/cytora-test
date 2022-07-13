import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { FavoriteButton } from '../components/FavoriteButton';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwVehicle } from '../types/SwVehicle';

export function VehicleView() {
  const { id: routeId } = useParams();
  const [vehicle] = useSwapi<SwVehicle | null>(`/vehicles/${routeId}`, null);

  if (!vehicle) {
    return <Spinner />;
  }

  return (
    <Content>
      <header>
        <h2>{vehicle.name}</h2>
        <FavoriteButton item={vehicle} />
      </header>

      <dl>
        <dt>Model:</dt>
        <dd>{vehicle.model}</dd>
        <dt>Manufacturer:</dt>
        <dd>{vehicle.manufacturer}</dd>
        <dt>Length:</dt>
        <dd>{vehicle.length}</dd>
        <dt>Crew:</dt>
        <dd>{vehicle.crew}</dd>
        <dt>Passengers:</dt>
        <dd>{vehicle.passengers}</dd>
        <dt>Max atmosphering speed:</dt>
        <dd>{vehicle.max_atmosphering_speed}</dd>
        <dt>Cargo capacity:</dt>
        <dd>{vehicle.cargo_capacity}</dd>
        <dt>Consumables:</dt>
        <dd>{vehicle.consumables}</dd>
        <dt>Vehicle class:</dt>
        <dd>{vehicle.vehicle_class}</dd>
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={vehicle.films} />
        <SwapiLinkSet title="Pilots" kind="character" items={vehicle.pilots} />
      </nav>
    </Content>
  );
}
