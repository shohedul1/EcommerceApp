'use client';

import { use } from 'react';
import { cards } from '@/lib/data';
import { FcRating } from 'react-icons/fc';
import Image from 'next/image';

// Define a type for the product
interface Product {
    id: string;
    images: string;
    title: string;
    description: string;
    price: number;
    rating: number;
}

interface ProductPageProps {
    params: Promise<{ id: string }>;
}

const ProductPage = ({ params }: ProductPageProps) => {
    // Unwrap the `params` using `React.use()`
    const { id } = use(params);

    // Find the matching product, ensuring we match on the `id` type correctly
    const product = cards.find((card: Product) => String(card.id) === String(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>
            <div className="flex flex-col items-center">
                {/* Use Next.js Image component for optimization */}
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
