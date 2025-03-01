import Image from 'next/image';
import React from 'react';

// Define types for the props
interface ProductCardProps {
  price: number; // Explicitly define the price as a number
  index: number; // Explicitly define the index as a number
}

const ProductCard: React.FC<ProductCardProps> = ({ price, index }) => {
  return (
    <>
      <div key={index} className="p-4 rounded hover:bg-red-200 duration-500 transition-all">
        <div className="flex items-center gap-4 border-b border-red-100">
          <div className="w-20 h-20 relative">
            <Image
              width={500}
              height={500}
              alt="image"
              src="/carrot.png"
              className="w-full h-full"
              priority={index === 0} // Prioritize the first image
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1>Nestle Original Coffee-Mate Coffee Creamer</h1>
            <p>raging</p>
            <div className="flex gap-3">
              <div className="text-xl font-semibold text-green-500">${price}</div> {/* Price is static */}
              <div className="line-through text-gray-500">${price * 2}</div> {/* Old price */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
