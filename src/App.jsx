import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation(); // Untuk mendapatkan lokasi path saat ini

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">My Application</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        {location.pathname === '/' ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-xl mb-4">Welcome to My Application</h2>
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Masuk
            </Link>
          </div>
        ) : (
          <Outlet /> // Merender komponen rute anak jika bukan di root path
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        <p>© 2024 My Application</p>
      </footer>
    </div>
  );
}

export default App;
