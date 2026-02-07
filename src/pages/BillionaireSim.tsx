import { Link } from 'react-router-dom';
import { useState } from 'react';

export function BillionaireSim() {
  const [money, setMoney] = useState(0);
  const [perClick, setPerClick] = useState(1);

  const earn = () => setMoney((m) => m + perClick);
  const upgrade = () => {
    if (money < 10) return;
    setMoney((m) => m - 10);
    setPerClick((p) => p + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-100 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Billionaire Sim</h1>
        <p className="text-gray-600 mb-6">Click to earn money and buy upgrades.</p>
        <div className="bg-white p-8 rounded-lg shadow text-center mb-6">
          <div className="text-5xl font-bold text-green-600 mb-2">${money.toLocaleString()}</div>
          <p className="text-gray-600">Earn ${perClick} per click</p>
        </div>
        <div className="flex gap-3">
          <button onClick={earn} className="flex-1 bg-green-600 text-white p-3 rounded font-bold text-lg hover:bg-green-700">
            Earn
          </button>
          <button
            onClick={upgrade}
            disabled={money < 10}
            className={`flex-1 p-3 rounded font-bold text-lg ${
              money >= 10
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            Upgrade ($10)
          </button>
        </div>
      </div>
    </div>
  );
}
