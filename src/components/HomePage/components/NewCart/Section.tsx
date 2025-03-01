import Image from "next/image";
import React from "react";

export const Section = () => {
    return (
        <section className="w-full pt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative  overflow-hidden">
                        {/* Product Image */}
                        <div className="relative w-full h-64 overflow-hidden  rounded-xl">
                            <Image width={500} height={500} src="/carrot.png" alt="image" className="w-full h-full hover:scale-110 duration-200 transition-all rounded-xl" />
                        </div>

                        {/* Product Details */}
                        <div className="p-4 hover:scale-105 dark:bg-black bg-white dark:text-white duration-300 transition-all text-black shadow-md rounded-lg -translate-y-28 mx-4">
                            <h3 className="text-lg font-bold dark:text-white text-black">
                                Seeds of Change Organic Quinoa, Brown & Red Rice
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                <div className="bg-[url(/div-product-rate.png)] bg-cover bg-center w-14 h-3"></div>
                                <span className="ml-2 text-sm dark:text-white text-black">(4.0)</span>
                            </div>

                            {/* Brand Name */}
                            <p className="text-sm text-gray-500 mt-1">
                                By <span className="text-green-600 font-semibold">NestFood</span>
                            </p>

                            {/* Pricing */}
                            <div className="flex items-center mt-3">
                                <span className="text-xl font-bold text-green-600">$32.85</span>
                                <span className="ml-2 text-sm text-gray-400 line-through">$33.80</span>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
