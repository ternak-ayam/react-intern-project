import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Ambil pesan dari URL parameter
    const params = new URLSearchParams(location.search);
    const msg = params.get('message');
    if (msg === 'login-success') {
      setMessage('Anda berhasil login!');
    }
  }, [location]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
      {message && (
        <div className="notification absolute top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-md">
          {message}
        </div>
      )}
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;
