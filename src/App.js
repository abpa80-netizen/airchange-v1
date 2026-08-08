import React from 'react';
import Dashboard from './pages/Dashboard';
import Ambassadeur from './pages/Ambassadeur';
import Paiement from './components/Paiement';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-green-600">AirChange</h1>
      </nav>
      <Dashboard />
      <Ambassadeur />
      <Paiement />
    </div>
  );
}
export default App;
