import { Link } from 'react-router-dom';
import { useState } from 'react';

export function BidBattle() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [round, setRound] = useState(0);

  const newRound = () => {
    const win = Math.random() < 0.5 ? 1 : 2;
    if (win === 1) setP1((s) => s + 1);
    else setP2((s) => s + 1);
    setRound((s) => s + 1);
  };

  const reset = () => { setP1(0); setP2(0); setRound(0); };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-orange-100 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Bid Battle</h1>
        <p className="text-gray-600 mb-6">Quick battle simulation between two bidders.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-red-600">{p1}</div>
            <p className="text-gray-600">Player 1 Wins</p>
          </div>
          <div className="bg-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600">{p2}</div>
            <p className="text-gray-600">Player 2 Wins</p>
          </div>
        </div>
        <div className="text-center mb-4 text-gray-700">
          <p>Round: <strong>{round}</strong></p>
        </div>
        <div className="flex gap-3">
          <button onClick={newRound} className="flex-1 bg-green-600 text-white p-2 rounded font-bold hover:bg-green-700">
            Next Round
          </button>
          <button onClick={reset} className="flex-1 bg-gray-600 text-white p-2 rounded font-bold hover:bg-gray-700">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
