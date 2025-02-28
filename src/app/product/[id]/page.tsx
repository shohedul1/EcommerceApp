'use client';

import { use } from 'react';
import { cards } from '@/lib/data';
import { FcRating } from 'react-icons/fc';

interface ProductPageProps {
    params: Promise<{ id: string }>;  // `params` is now a Promise
}

const ProductPage = ({ params }: ProductPageProps) => {
    // Unwrap the `params` using `React.use()`
    const { id } = use(params);


    // Ensure that `id` is a string, and find the matching product
    const product = cards.find((card: any) => String(card.id) === String(id));

    // Log to check if the product is found
    console.log("Found Product:", product);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">{product.title}</h1>
            <div className="flex flex-col items-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-[300px] h-[300px] object-cover mb-4"
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
