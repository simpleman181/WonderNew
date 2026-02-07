import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export function DeepSea() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [depth, setDepth] = useState(0);
  const particles = useRef<{x:number,y:number,r:number,opacity:number}[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    const resize = () => { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; };
    resize();
    window.addEventListener('resize', resize);

    const loop = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      const hue = 200 + depth * 0.5;
      gradient.addColorStop(0, `hsl(200, 100%, ${60-depth*0.3}%)`);
      gradient.addColorStop(1, `hsl(${hue}, 80%, ${20-depth*0.2}%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.1 && particles.current.length < 50) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height,
          r: 2 + Math.random() * 4,
          opacity: 0.5 + Math.random() * 0.5,
        });
      }

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.y -= 0.5 + depth * 0.01;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        if (p.y < 0) particles.current.splice(i, 1);
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [depth]);

  return (
    <div className="min-h-screen bg-black p-8 flex flex-col">
      <Link to="/" className="text-blue-300 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="flex-1 flex flex-col">
        <h1 className="text-4xl font-bold mb-2 text-white">Deep Sea Explorer</h1>
        <p className="text-gray-300 mb-4">Scroll or drag the slider to dive deeper into the ocean.</p>
        
        <div className="flex-1 border-4 border-white/20 rounded overflow-hidden mb-6">
          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>

        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="100"
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-white font-bold">{depth}m</span>
        </div>
      </div>
    </div>
  );
}
