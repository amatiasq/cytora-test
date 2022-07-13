import { Character } from '../types/Character';
import { CharacterSummary } from './CharacterSummary';
import { SwapPaginatedList } from './SwapPaginatedList';

function App() {
  return (
    <SwapPaginatedList apiPath="/people">
      {(character: Character) => <CharacterSummary character={character} />}
    </SwapPaginatedList>
  );
}

export default App;
