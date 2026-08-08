import React, { useState } from 'react';

export default function Paiement() {
  const [methode, setMethode] = useState('mobile');

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Paiement</h2>
      <div className="space-y-3">
        <button onClick={() => setMethode('mobile')} className="w-full bg-green-500 text-white p-3 rounded">Mobile Money</button>
        <button onClick={() => setMethode('bancaire')} className="w-full bg-blue-500 text-white p-3 rounded">Virement Bancaire</button>
      </div>
      <p className="mt-4">Méthode choisie: {methode}</p>
    </div>
  )
}
