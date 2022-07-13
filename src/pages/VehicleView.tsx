import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
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
        <Detail label="Model" value={vehicle.model} />
        <Detail label="Manufacturer" value={vehicle.manufacturer} />
        <Detail label="Length" value={vehicle.length} />
        <Detail label="Crew" value={vehicle.crew} />
        <Detail label="Passengers" value={vehicle.passengers} />
        <Detail
          label="Max atmosphering speed"
          value={vehicle.max_atmosphering_speed}
        />
        <Detail label="Cargo capacity" value={vehicle.cargo_capacity} />
        <Detail label="Consumables" value={vehicle.consumables} />
        <Detail label="Vehicle class" value={vehicle.vehicle_class} />
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={vehicle.films} />
        <SwapiLinkSet title="Pilots" kind="character" items={vehicle.pilots} />
      </nav>
    </Content>
  );
}
