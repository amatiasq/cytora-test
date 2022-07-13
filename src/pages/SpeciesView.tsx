import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { FavoriteButton } from '../components/FavoriteButton';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwSpecies } from '../types/SwSpecies';

export function SpeciesView() {
  const { id: routeId } = useParams();
  const [species] = useSwapi<SwSpecies | null>(`/species/${routeId}`, null);

  if (!species) {
    return <Spinner />;
  }

  return (
    <Content>
      <header>
        <h2>{species.name}</h2>
        <FavoriteButton item={species} />
      </header>

      <dl>
        <Detail label="Classification" value={species.classification} />
        <Detail label="Designation" value={species.designation} />
        <Detail label="Average height" value={species.average_height} />
        <Detail label="Average lifespan" value={species.average_lifespan} />
        <Detail label="Eye colors" value={species.eye_colors} />
        <Detail label="Hair colors" value={species.hair_colors} />
        <Detail label="Language" value={species.language} />
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={species.films} />
        <SwapiLinkSet title="Members" kind="character" items={species.people} />
      </nav>
    </Content>
  );
}
