import React, { useState } from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import { plants, categories } from '../data/plants';

const ProductListingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('name');

    const filteredPlants = selectedCategory === 'All'
        ? plants
        : plants.filter(plant => plant.category === selectedCategory);

    const sortedPlants = [...filteredPlants].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
            <Header />

            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Green Companion</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                        Explore our curated collection of houseplants, each chosen to bring life and beauty to your space.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                        <div className="flex-1">
                            <h3 className="text-sm font-semibold text-gray-500 mb-3">FILTER BY CATEGORY</h3>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        selectedCategory === 'All'
                                            ? 'bg-emerald-500 text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    All Plants
                                </button>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-emerald-500 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-auto">
                            <h3 className="text-sm font-semibold text-gray-500 mb-3">SORT BY</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full lg:w-48 bg-white border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                            >
                                <option value="name">Name (A-Z)</option>
                                <option value="price-low">Price (Low to High)</option>
                                <option value="price-high">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-semibold text-emerald-600">{sortedPlants.length}</span> plants
                        {selectedCategory !== 'All' && (
                            <span> in <span className="font-semibold text-emerald-600">{selectedCategory}</span></span>
                        )}
                    </p>
                </div>

                {sortedPlants.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🌱</div>
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">No plants found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {sortedPlants.map(plant => (
                            <PlantCard key={plant.id} plant={plant} />
                        ))}
                    </div>
                )}
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-12 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Get Plant Care Tips & Exclusive Offers</h2>
                    <p className="text-emerald-100 mb-6 max-w-md mx-auto">
                        Join our newsletter and become a plant care expert!
                    </p>
                    <div className="flex max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-l-2xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800"
                        />
                        <button className="bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-r-2xl font-semibold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListingPage;