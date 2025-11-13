// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/products/${product._id}`} className="block">
        <div className="h-44 bg-gray-50 flex items-center justify-center">
          {/* placeholder image area */}
          <img src={product.images?.[0] || '/placeholder.png'} alt={product.name} className="object-contain h-36" />
        </div>

        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-800 truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1 overflow-hidden max-h-12">{product.description}</p>


          <div className="mt-3 flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-900">₹{product.price}</div>
            <div className="text-sm text-gray-500">{product.stock > 0 ? `${product.stock} left` : 'Out of stock'}</div>
          </div>
        </div>
      </Link>
    </article>
  );
}
