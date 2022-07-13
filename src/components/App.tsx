import { Route, Routes } from 'react-router-dom';
import { CharacterList } from '../pages/CharacterList';
import { CharacterView } from '../pages/CharacterView';
import { LocationView } from '../pages/LocationView';
import { Content } from './Content';

function App() {
  return (
    <>
      <Content as="h1">Cytora test app</Content>
      <Content>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterView />} />
          <Route path="/location/:id" element={<LocationView />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
