import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export function AsteroidLauncher() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const asteroids = useRef<{x:number,y:number,r:number,v:number}[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const resize = () => { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; };
    resize();
    window.addEventListener('resize', resize);

    const spawn = () => {
      asteroids.current.push({ x: Math.random()*canvas.width, y: -20, r: 8+Math.random()*24, v: 0.5+Math.random()*1.5 });
    };

    const loop = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      if (Math.random() < 0.02) spawn();
      for (let i = asteroids.current.length-1; i>=0; i--) {
        const a = asteroids.current[i];
        a.y += a.v;
        ctx.fillStyle = '#c9b79c';
        ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.fill();
        if (a.y - a.r > canvas.height) asteroids.current.splice(i,1);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    for (let i = asteroids.current.length-1; i>=0; i--) {
      const a = asteroids.current[i];
      const dx = a.x - x, dy = a.y - y;
      if (Math.hypot(dx,dy) < a.r) { asteroids.current.splice(i,1); setScore((s)=>s+1); break; }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link to='/' className="text-blue-300 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Asteroid Launcher</h1>
        <p className="text-gray-300 mb-4">Click asteroids to destroy them. Score increases per hit.</p>
        <div className="border border-white/5 rounded overflow-hidden">
          <canvas ref={canvasRef} onClick={handleClick} className="w-full h-96 block bg-gradient-to-b from-gray-900 to-black" />
        </div>
        <div className="mt-4">Score: <strong className="text-xl">{score}</strong></div>
      </div>
    </div>
  );
}
