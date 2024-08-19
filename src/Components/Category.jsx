import React from 'react';

const Category = ({ onSelectCategory, selectedCategory }) => {
    const categories = [
        'Commercial Construction',
        'Residential Construction',
        'Renovation Construction',
        'Architectural Construction'
    ];

    return (
        <div className="flex flex-wrap justify-center items-center border-b-2 text-gray-900 font-semibold">
            <button
                onClick={() => onSelectCategory(null)}
                className={`mb-2 mx-2 py-1 px-4 text-sm rounded-md transition-colors duration-300 ${!selectedCategory ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
            >
                All
            </button>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`mb-2 mx-2 py-1 px-4 text-sm rounded-md transition-colors duration-300 ${selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;