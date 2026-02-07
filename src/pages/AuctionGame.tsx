import { Link } from 'react-router-dom';
import { useState } from 'react';

export function AuctionGame() {
  const [bid, setBid] = useState('');
  const [highest, setHighest] = useState(10);
  const [history, setHistory] = useState<number[]>([10]);

  const place = () => {
    const v = Number(bid);
    if (!isFinite(v) || v <= highest) return;
    setHighest(v); setHistory((h)=>[v,...h]); setBid('');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <Link to='/' className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Auction Game</h1>
        <p className="text-gray-600 mb-4">Place higher bids to become the highest bidder.</p>
        <div className="bg-gray-50 p-6 rounded mb-4 border">
          <div className="mb-2">Current highest: <strong>${highest}</strong></div>
          <div className="flex gap-2">
            <input value={bid} onChange={(e)=>setBid(e.target.value)} className="flex-1 border p-2 rounded" placeholder="Enter bid amount" />
            <button onClick={place} className="bg-green-600 text-white px-4 rounded">Bid</button>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Recent bids</h3>
          <ul className="list-disc pl-6 text-gray-700">
            {history.map((h,idx)=>(<li key={idx}>${h}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
