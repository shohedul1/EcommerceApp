'use client';

import { use } from 'react';
import { cards } from '@/lib/data';
import { FcRating } from 'react-icons/fc';
import Image from 'next/image';

// Define your Product type to match the shape of the card objects
interface Product {
    id: number;
    images: string;
    title: string;
    description: string;
    price: string;  // Assuming price is a string in your data
    fixedPrice: string;
    rating: string;  // Assuming rating is a string in your data
}

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
    const { id } = use(params);

    // Find the matching product with the proper type
    const product = cards.find((card: Product) => card.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>
            <div className="flex flex-col items-center">
                <Image
                    src={product.images}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover mb-4"
                />
                <p className="text-lg">{product.description}</p>
                <p className="text-xl font-semibold text-green-500">${product.price}</p>
                <div className="flex items-center gap-2 mt-4">
                    <FcRating />
                    <span>{product.rating}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
