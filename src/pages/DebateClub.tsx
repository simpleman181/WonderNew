import { Link } from 'react-router-dom';
import { useState } from 'react';

const topics = [
  { prompt: 'Is pineapple on pizza acceptable?', pro: 'Adds sweet flavor', con: 'Clashes with cheese' },
  { prompt: 'Should we work 4-day weeks?', pro: 'Better work-life balance', con: 'Less productivity' },
  { prompt: 'Is AI a threat to humanity?', pro: 'Uncontrolled AI is risky', con: 'AI solves big problems' },
  { prompt: 'Should cats or dogs be pets?', pro: 'Dogs are loyal', con: 'Cats are independent' },
  { prompt: 'Is remote work better?', pro: 'More flexibility', con: 'Less collaboration' },
];

export function DebateClub() {
  const [idx, setIdx] = useState(0);
  const [proVotes, setProVotes] = useState(0);
  const [conVotes, setConVotes] = useState(0);

  const topic = topics[idx];
  const vote = (side: 'pro' | 'con') => {
    if (side === 'pro') setProVotes((v) => v + 1);
    else setConVotes((v) => v + 1);
  };
  const next = () => setIdx((i) => (i + 1) % topics.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Debate Club</h1>
        <p className="text-gray-600 mb-6">Vote on controversial topics and see what others think.</p>
        
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-2xl font-bold text-center mb-6">{topic.prompt}</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => vote('pro')}
              className="bg-green-100 hover:bg-green-200 text-green-900 p-4 rounded border-2 border-green-500"
            >
              <div className="font-bold mb-2">👍 Pro</div>
              <div className="text-sm">{topic.pro}</div>
            </button>
            <button
              onClick={() => vote('con')}
              className="bg-red-100 hover:bg-red-200 text-red-900 p-4 rounded border-2 border-red-500"
            >
              <div className="font-bold mb-2">👎 Con</div>
              <div className="text-sm">{topic.con}</div>
            </button>
          </div>
          <div className="text-center text-sm text-gray-600">
            <p>Pro: {proVotes} | Con: {conVotes}</p>
          </div>
        </div>

        <button onClick={next} className="w-full bg-purple-600 text-white p-3 rounded font-bold hover:bg-purple-700">
          Next Topic
        </button>
      </div>
    </div>
  );
}
