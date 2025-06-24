import React, { useState, useMemo } from 'react';

// Données d'exemple pour le matériel. Plus tard, cela pourrait venir d'une base de données.
const allEquipment = [
  { id: 1, name: 'Guitare Électrique "La Débrouille"', category: 'Guitare', price: 80, image: '/path/to/your/image.jpg' },
  { id: 2, name: 'Batterie "Le Rythme du Garage"', category: 'Batterie', price: 150, image: '/path/to/your/image.jpg' },
  { id: 3, name: 'Micro "Le Cri du Cœur"', category: 'Micro', price: 40, image: '/path/to/your/image.jpg' },
  { id: 4, name: 'Synthé "Le Son du Futur"', category: 'Synthé', price: 250, image: '/path/to/your/image.jpg' },
  { id: 5, name: 'Guitare Pro "La Scène T\'attend"', category: 'Guitare', price: 600, image: '/path/to/your/image.jpg' },
  { id: 6, name: 'Batterie Acoustique "La Frappe Lourde"', category: 'Batterie', price: 800, image: '/path/to/your/image.jpg' },
  { id: 7, name: 'Micro de Studio "La Voix Claire"', category: 'Micro', price: 120, image: '/path/to/your/image.jpg' },
  // Ajoutez plus de matériel ici...
];

const Equipment = () => {
  // États pour les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000); // Prix maximum initial

  // Mémoïsation pour ne recalculer la liste filtrée que si les données ou les filtres changent
  const filteredEquipment = useMemo(() => {
    return allEquipment.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesPrice = item.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, maxPrice]);

  // Obtenir les catégories uniques pour le filtre
  const categories = ['all', ...new Set(allEquipment.map(item => item.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Notre Matos</h1>

      {/* Section des filtres */}
      <div className="bg-gray-800 p-4 rounded-lg mb-8 flex flex-col md:flex-row gap-4 items-center">
        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full md:w-1/3 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filtre par catégorie */}
        <select
          className="w-full md:w-1/4 p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category === 'all' ? 'Toutes les catégories' : category}</option>
          ))}
        </select>

        {/* Filtre par prix */}
        <div className="w-full md:w-1/3">
          <label htmlFor="price" className="block text-white mb-2">Prix maximum : {maxPrice}€</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000" // Mettez ici le prix maximum de vos produits
            step="10"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEquipment.length > 0 ? (
          filteredEquipment.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
              <p className="text-cyan-400 text-xl mb-2">{item.price}€</p>
              <p className="text-gray-400 mb-4">Catégorie : {item.category}</p>
              <button className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 transition-colors duration-300">
                Voir le Produit (Affiliation)
              </button>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">Aucun produit ne correspond à votre recherche.</p>
        )}
      </div>
    </div>
  );
};

export default Equipment;
