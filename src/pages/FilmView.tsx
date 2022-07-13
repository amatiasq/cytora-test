import { useParams } from 'react-router-dom';
import { Content } from '../components/Content';
import { FavoriteButton } from '../components/FavoriteButton';
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
      <header>
        <h2>{film.title}</h2>
        <FavoriteButton item={film} />
      </header>

      <dl>
        <dt>Director:</dt>
        <dd>{film.director}</dd>
        <dt>Producer:</dt>
        <dd>{film.producer}</dd>
        <dt>Release date:</dt>
        <dd>{film.release_date}</dd>
        <dt>Opening crawl:</dt>
        <dd>{film.opening_crawl}</dd>
      </dl>

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
