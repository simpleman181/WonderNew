import { Link } from 'react-router-dom';
import { useState } from 'react';

export function BabyMap() {
  const [birth, setBirth] = useState('');
  const [info, setInfo] = useState('');

  const getZodiac = (month: number, day: number) => {
    const zodiacSigns = [
      { name: 'Capricorn', start: [12, 22], end: [1, 19] },
      { name: 'Aquarius', start: [1, 20], end: [2, 18] },
      { name: 'Pisces', start: [2, 19], end: [3, 20] },
      { name: 'Aries', start: [3, 21], end: [4, 19] },
      { name: 'Taurus', start: [4, 20], end: [5, 20] },
      { name: 'Gemini', start: [5, 21], end: [6, 20] },
      { name: 'Cancer', start: [6, 21], end: [7, 22] },
      { name: 'Leo', start: [7, 23], end: [8, 22] },
      { name: 'Virgo', start: [8, 23], end: [9, 22] },
      { name: 'Libra', start: [9, 23], end: [10, 22] },
      { name: 'Scorpio', start: [10, 23], end: [11, 21] },
      { name: 'Sagittarius', start: [11, 22], end: [12, 21] },
    ];
    const z = zodiacSigns.find((z) => {
      const [sm, sd] = z.start;
      const [em, ed] = z.end;
      if (sm === em) return month === sm && day >= sd && day <= ed;
      return (month === sm && day >= sd) || (month === em && day <= ed);
    });
    return z?.name || 'Unknown';
  };

  const handleSubmit = () => {
    if (!birth) return;
    const [, m, d] = birth.split('-').map(Number);
    setInfo(`Born under ${getZodiac(m, d)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Baby Map</h1>
        <p className="text-gray-600 mb-6">Check your birth date and discover your zodiac sign.</p>
        <div className="bg-white p-6 rounded-lg shadow">
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button onClick={handleSubmit} className="w-full bg-purple-600 text-white p-2 rounded font-bold hover:bg-purple-700">
            Discover
          </button>
          {info && <p className="mt-4 text-center text-lg font-bold text-purple-700">{info}</p>}
        </div>
      </div>
    </div>
  );
}
