import React, { useState } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants, categories } from '../data/plants';

const ProductListingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPlants = selectedCategory === 'All'
        ? plants
        : plants.filter(plant => plant.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Plants</h1>

                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-2 flex space-x-2">
                        <button
                            onClick={() => setSelectedCategory('All')}
                            className={`px-4 py-2 rounded-md transition-colors ${
                                selectedCategory === 'All'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All Plants
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md transition-colors ${
                                    selectedCategory === category
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPlants.map(plant => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;