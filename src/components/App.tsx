import { useState } from 'react';
import { useSwapi } from '../hooks/useSwapi';
import { Character } from '../types/Character';
import { Paginated } from '../types/Paginated';
import { Pagination } from './Pagination';
import { Spinner } from './Spinner';

function App() {
  const [page, setPage] = useState('/people');
  const [characters] = useSwapi<Paginated<Character> | null>(page, null);

  if (!characters) {
    return <Spinner />;
  }

  console.log(characters.results);

  return (
    <>
      <ul>
        {characters.results.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>

      <Pagination {...characters} onNavigate={setPage} />
    </>
  );
}

export default App;
