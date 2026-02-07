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
