import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function AmbientChaos() {
  const [playing, setPlaying] = useState(false);
  const [seed, setSeed] = useState(Math.random());

  useEffect(() => {
    let raf = 0;
    if (playing) {
      const start = performance.now();
      const el = document.getElementById('visual');
      const draw = () => {
        if (!el) return;
        const t = (performance.now() - start) / 1000;
        const v = Math.abs(Math.sin(t * (1 + seed * 5)));
        (el as HTMLElement).style.background = `radial-gradient(circle at ${v * 100}% ${ (1-v)*100 }%, rgba(255,255,255,${0.05+v*0.25}), rgba(0,0,0,0.2))`;
        raf = requestAnimationFrame(draw);
      };
      raf = requestAnimationFrame(draw);
    }
    return () => cancelAnimationFrame(raf);
  }, [playing, seed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-black text-white p-8">
      <Link to="/" className="text-blue-300 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Ambient Chaos</h1>
        <p className="text-gray-300 mb-4">A simple ambient visualizer — toggle play and randomize the pattern.</p>

        <div id="visual" className="rounded-lg h-80 mb-6 border border-white/5" />

        <div className="flex gap-3">
          <button onClick={() => setPlaying((s) => !s)} className="px-4 py-2 bg-blue-600 rounded">{playing ? 'Stop' : 'Play'}</button>
          <button onClick={() => setSeed(Math.random())} className="px-4 py-2 bg-gray-700 rounded">Randomize</button>
        </div>
      </div>
    </div>
  );
}
