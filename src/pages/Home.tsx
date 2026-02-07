import { Header } from '@/components/Header';
import { NewsletterButton } from '@/components/NewsletterButton';
import { ProjectGrid } from '@/components/ProjectGrid';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';
[200~export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NewsletterButton />
      <Header />
      <main>
        <ProjectGrid projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
HOMEFILE~
cat > src/pages/CosmicScale.tsx << 'COSMICFILE'
import { Link } from 'react-router-dom';

export function CosmicScale() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Cosmic Scale</h1>
      <p className="text-xl">Explore the scale of the universe - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>This interactive experience will let you explore objects from the smallest particles to the largest structures in the universe.</p>
      </div>
    </div>
  );
}
COSMICFILE

cat > src/pages/HumanCheck.tsx << 'HUMANFILE'
import { Link } from 'react-router-dom';

export function HumanCheck() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Human Verification</h1>
      <p className="text-xl">Test your humanity - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>An interactive challenge to prove you're human through creative puzzles.</p>
      </div>
    </div>
  );
}
HUMANFILE

cat > src/pages/DigitalRoadtrip.tsx << 'ROADTRIPFILE'
import { Link } from 'react-router-dom';

export function DigitalRoadtrip() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Digital Roadtrip</h1>
      <p className="text-xl">Journey through digital landscapes - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>Take a virtual road trip through internet history and digital culture.</p>
      </div>
    </div>
  );
}
ROADTRIPFILE

cat > src/pages/DopamineClicker.tsx << 'DOPAMINEFILE'
import { Link } from 'react-router-dom';

export function DopamineClicker() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Dopamine Clicker</h1>
      <p className="text-xl">Click for satisfaction - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>An addictive clicker game exploring instant gratification.</p>
      </div>
    </div>
  );
}
DOPAMINEFILE

cat > src/pages/ElementFusion.tsx << 'ELEMENTFILE'
import { Link } from 'react-router-dom';

export function ElementFusion() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Element Fusion</h1>
      <p className="text-xl">Combine elements to create new ones - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>Discover new elements by combining basic building blocks in creative ways.</p>
      </div>
    </div>
  );
}
ELEMENTFILE

cat > src/pages/WebMuseum.tsx << 'WEBFILE'
import { Link } from 'react-router-dom';

export function WebMuseum() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/" className="text-blue-400 hover:underline mb-8 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-4">Web Museum</h1>
      <p className="text-xl">Explore internet history - Coming Soon!</p>
      <div className="mt-8 p-8 bg-gray-800 rounded-lg">
        <p>A curated collection of internet artifacts and web history.</p>
      </div>
    </div>
  );
}
WEBFILE

# Step 5: Update App.tsx with React Router
echo "Step 5: Setting up React Router in App.tsx..."
cat > src/App.tsx << 'APPFILE'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter basename="/WonderNew">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmic-scale" element={<CosmicScale />} />
        <Route path="/human-check" element={<HumanCheck />} />
        <Route path="/digital-roadtrip" element={<DigitalRoadtrip />} />
        <Route path="/dopamine-clicker" element={<DopamineClicker />} />
        <Route path="/element-fusion" element={<ElementFusion />} />
        <Route path="/web-museum" element={<WebMuseum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
APPFILE

# Step 6: Update index.html title
echo "Step 6: Updating index.html title..."
sed -i 's/<title>Neal.fun<\/title>/<title>WonderHub - Interactive Experiences<\/title>/g' index.html

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Review the changes: git status"
echo "2. Test locally: npm install && npm run dev"
echo "3. Commit and push: git add . && git commit -m 'Add React Router navigation' && git push"

