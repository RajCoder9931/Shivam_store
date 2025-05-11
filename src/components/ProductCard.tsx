import React, { Component } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  image,
  description
}) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi, I'm interested in ordering ${name} for ₹${price}`;
    const whatsappUrl = `https://wa.me/+911234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-700 font-bold">₹{price}</span>
          <button onClick={handleWhatsAppOrder} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md flex items-center text-sm">
            <ShoppingCartIcon className="h-4 w-4 mr-1" />
            Order Now
          </button>
        </div>
      </div>
    </div>;
};
export default ProductCard;