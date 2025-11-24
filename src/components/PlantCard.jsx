import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const PlantCard = ({ plant }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addItemToCart(plant));
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 2000);
    };

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-200">
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50">
                <div className={`w-full h-48 bg-gray-200 animate-pulse ${imageLoaded ? 'hidden' : 'block'}`}></div>
                <img
                    src={plant.image}
                    alt={plant.name}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 ${
                        imageLoaded ? 'block' : 'hidden'
                    }`}
                />

                <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
                        {plant.category}
                    </span>
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <button className="bg-white/90 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-1">
                        {plant.name}
                    </h3>
                    <div className="flex items-center text-amber-500 text-sm">
                        <span>⭐</span>
                        <span className="ml-1 font-semibold">4.8</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {plant.description}
                </p>

                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-emerald-600">${plant.price.toFixed(2)}</span>
                        <span className="text-xs text-gray-500">Free shipping</span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden ${
                            isAdded
                                ? 'bg-emerald-500 text-white cursor-not-allowed scale-95'
                                : 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:from-emerald-600 hover:to-green-600 hover:shadow-lg transform hover:scale-105'
                        }`}
                    >
                        <span className={`transition-opacity duration-300 ${isAdded ? 'opacity-0' : 'opacity-100'}`}>
                            Add to Cart
                        </span>
                        <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isAdded ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Added!
                            </div>
                        </span>
                    </button>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Easy Care
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Air Purifying
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                        Pet Safe
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;