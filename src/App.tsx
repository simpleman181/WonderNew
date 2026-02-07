import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CosmicScale } from './pages/CosmicScale';
import { HumanCheck } from './pages/HumanCheck';
import { DigitalRoadtrip } from './pages/DigitalRoadtrip';
import { DopamineClicker } from './pages/DopamineClicker';
import { ElementFusion } from './pages/ElementFusion';
import { WebMuseum } from './pages/WebMuseum';
import { GenericProject } from './pages/GenericProject';
import { AmbientChaos } from './pages/AmbientChaos';
import { AsteroidLauncher } from './pages/AsteroidLauncher';
import { AuctionGame } from './pages/AuctionGame';
import { AmbientSounds } from './pages/AmbientSounds';
import { BabyMap } from './pages/BabyMap';
import { BidBattle } from './pages/BidBattle';
import { BillionaireSim } from './pages/BillionaireSim';
import { DarkPatterns } from './pages/DarkPatterns';
import { DaysSinceIncident } from './pages/DaysSinceIncident';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/WonderNew/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmic-scale" element={<CosmicScale />} />
        <Route path="/human-check" element={<HumanCheck />} />
        <Route path="/digital-roadtrip" element={<DigitalRoadtrip />} />
        <Route path="/dopamine-clicker" element={<DopamineClicker />} />
        <Route path="/element-fusion" element={<ElementFusion />} />
        <Route path="/web-museum" element={<WebMuseum />} />
        <Route path="/ambient-chaos" element={<AmbientChaos />} />
        <Route path="/asteroid-launcher" element={<AsteroidLauncher />} />
        <Route path="/auction-game" element={<AuctionGame />} />
        <Route path="/ambient-sounds" element={<AmbientSounds />} />
        <Route path="/baby-map" element={<BabyMap />} />
        <Route path="/bid-battle" element={<BidBattle />} />
        <Route path="/billionaire-sim" element={<BillionaireSim />} />
        <Route path="/dark-patterns" element={<DarkPatterns />} />
        <Route path="/days-since-incident" element={<DaysSinceIncident />} />
        {/* Dynamic project routes (fallback for image-backed projects) */}
        <Route path="/:projectId" element={<GenericProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
