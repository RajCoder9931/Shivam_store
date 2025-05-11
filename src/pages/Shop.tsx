import React, { useState } from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
import { products } from '../utils/mockData';
import ProductCard from '../components/ProductCard';
const categories = ['All', ...new Set(products.map(product => product.category))];
const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shop Our Products
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse our collection of quality products
          </p>
        </div>
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" placeholder="Search products..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="w-full md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon className="h-5 w-5 text-gray-400" />
              </div>
              <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                {categories.map(category => <option key={category} value={category}>
                    {category}
                  </option>)}
              </select>
            </div>
          </div>
        </div>
        {/* Products Grid */}
        {filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)}
          </div> : <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
          </div>}
      </div>
    </div>;
};
export default Shop;