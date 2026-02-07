import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CosmicScale } from './pages/CosmicScale';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/WonderNew">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmic-scale" element={<CosmicScale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
