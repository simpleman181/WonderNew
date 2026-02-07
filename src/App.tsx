import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CosmicScale } from './pages/CosmicScale';
import { HumanCheck } from './pages/HumanCheck';
import { DigitalRoadtrip } from './pages/DigitalRoadtrip';
import { DopamineClicker } from './pages/DopamineClicker';
import { ElementFusion } from './pages/ElementFusion';
import { WebMuseum } from './pages/WebMuseum';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmic-scale" element={<CosmicScale />} />
        <Route path="/human-check" element={<HumanCheck />} />
        <Route path="/digital-roadtrip" element={<DigitalRoadtrip />} />
        <Route path="/dopamine-clicker" element={<DopamineClicker />} />
        <Route path="/element-fusion" element={<ElementFusion />} />
        <Route path="/web-museum" element={<WebMuseum />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
