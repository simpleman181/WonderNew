import { Link } from 'react-router-dom';
import { useState } from 'react';

const colors = ['black', 'white', 'red', 'blue', 'green', 'gold', 'purple'];
const sizes = ['mini', 'standard', 'plus', 'max'];

export function DesignIphone() {
  const [color, setColor] = useState('black');
  const [size, setSize] = useState('standard');
  const [features, setFeatures] = useState({ camera: true, notch: true, titanium: false });

  const toggle = (key: keyof typeof features) => {
    setFeatures((f) => ({ ...f, [key]: !f[key] }));
  };

  const sizeSpecs: Record<string, string> = {
    mini: '5.4"',
    standard: '6.1"',
    plus: '6.7"',
    max: '6.9"',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Design iPhone</h1>
        <p className="text-gray-600 mb-6">Customize your iPhone design with colors and features.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Preview */}
          <div className="md:col-span-1 flex justify-center items-center bg-white p-8 rounded-lg shadow">
            <div className={`w-32 h-64 rounded-3xl border-8 border-gray-800 flex items-center justify-center relative`}
                 style={{
                   backgroundColor: color === 'gold' ? '#FFD700' : color === 'black' ? '#000' : color,
                   color: color === 'white' ? '#000' : '#fff',
                 }}>
              {features.notch && (
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-b-2xl" />
              )}
              <div className="text-center text-xs">
                <p className="font-bold capitalize">{size}</p>
                <p className="text-xxs">{sizeSpecs[size]}</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="md:col-span-2 space-y-4">
            {/* Color */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-10 h-10 rounded-full border-4 ${
                      color === c ? 'border-blue-600' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: c === 'gold' ? '#FFD700' : c }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`p-2 rounded text-sm font-bold transition ${
                      size === s
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold mb-2">Features</h3>
              <label className="flex items-center gap-2 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={features.camera}
                  onChange={() => toggle('camera')}
                />
                <span>Pro Camera System</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer mb-2">
                <input
                  type="checkbox"
                  checked={features.notch}
                  onChange={() => toggle('notch')}
                />
                <span>Dynamic Island</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.titanium}
                  onChange={() => toggle('titanium')}
                />
                <span>Titanium Build</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
