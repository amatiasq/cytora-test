import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { Detail } from '../components/Detail';
import { DetailList } from '../components/DetailList';
import { ItemToggle } from '../components/ItemToggle';
import { Spinner } from '../components/Spinner';
import { SwapiLinkSet } from '../components/SwapLinkSet';
import { useSwapi } from '../hooks/useSwapi';
import { SwFilm } from '../types/SwFilm';

export function FilmView() {
  const { id: routeId } = useParams();
  const [film] = useSwapi<SwFilm | null>(`/films/${routeId}`, null);

  if (!film) {
    return <Spinner />;
  }

  return (
    <Content>
      <ItemToggle item={film}>{film.title}</ItemToggle>

      <DetailList>
        <Detail label="Director" value={film.director} />
        <Detail label="Producer" value={film.producer} />
        <Detail label="Release date" value={film.release_date} />
      </DetailList>

      <p>{film.opening_crawl}</p>

      <nav>
        <SwapiLinkSet
          title="Appearances"
          kind="character"
          items={film.characters}
        />

        <SwapiLinkSet
          title="Explored planets"
          kind="location"
          items={film.planets}
        />

        <SwapiLinkSet title="Species" kind="species" items={film.species} />
        <SwapiLinkSet title="Vehicles" kind="vehicle" items={film.vehicles} />
        <SwapiLinkSet title="Starships" kind="ship" items={film.starships} />
      </nav>
    </Content>
  );
}
