import { Route, Routes } from 'react-router-dom';
import { CharacterView } from '../pages/CharacterView';
import { FilmView } from '../pages/FilmView';
import { Home } from '../pages/Home';
import { LocationView } from '../pages/LocationView';
import { ShipView } from '../pages/ShipView';
import { SpeciesView } from '../pages/SpeciesView';
import { VehicleView } from '../pages/VehicleView';
import { Content } from './Content';

function App() {
  return (
    <Content>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterView />} />
        <Route path="/film/:id" element={<FilmView />} />
        <Route path="/location/:id" element={<LocationView />} />
        <Route path="/ship/:id" element={<ShipView />} />
        <Route path="/species/:id" element={<SpeciesView />} />
        <Route path="/vehicle/:id" element={<VehicleView />} />
      </Routes>
    </Content>
  );
}

export default App;
