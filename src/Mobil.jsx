import React, { useState } from 'react';

const TombolMobil = () => {
  const [color, setColor] = useState('red');

  const warnaBerubah = () => {
    setColor('blue');
  }

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">I am <span className={`text-${color}-600`}>{color}</span> mobil!</h2>
      <button 
        onClick={warnaBerubah} 
        className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-200"
      >
        Klik untuk berubah
      </button>
    </div>
  );
};

export default TombolMobil;
