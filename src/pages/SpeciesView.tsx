import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
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
        <dt>Classification:</dt>
        <dd>{species.classification}</dd>
        <dt>Designation:</dt>
        <dd>{species.designation}</dd>
        <dt>Average height:</dt>
        <dd>{species.average_height}</dd>
        <dt>Average lifespan:</dt>
        <dd>{species.average_lifespan}</dd>
        <dt>Eye colors:</dt>
        <dd>{species.eye_colors}</dd>
        <dt>Hair colors:</dt>
        <dd>{species.hair_colors}</dd>
        <dt>Language:</dt>
        <dd>{species.language}</dd>
      </dl>

      <nav>
        <SwapiLinkSet title="Appears in" kind="film" items={species.films} />
        <SwapiLinkSet title="Members" kind="character" items={species.people} />
      </nav>
    </Content>
  );
}
