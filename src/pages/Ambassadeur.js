import React from 'react';

export default function Ambassadeur() {
  const [parrainages, setParrainages] = useState(0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Espace Ambassadeur</h2>
      <div className="bg-blue-100 p-4 rounded">
        <p className="font-bold">Vos parrainages: {parrainages}</p>
        <p>Commission: {parrainages * 50} MAD</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Copier lien de parrainage
      </button>
    </div>
  )
}
