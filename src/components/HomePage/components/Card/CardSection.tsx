'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FcRating } from "react-icons/fc";
import { cards } from "@/lib/data";
import Link from "next/link";

const CardSection = ({ title }: { title: string }) => {
    return (
        <div className="container mx-auto px-4 py-10 bg-red-200">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <Link href={`/product/${card.id}`} key={card.id}>
                        <Card className="hover:shadow-lg relative overflow-hidden transition px-2 py-4 duration-300 ease-in-out bg-gray-100 dark:bg-gray-800">
                            <CardContent className="flex flex-col h-full -mt-14">
                                {/* Use only the first image for best performance */}
                                <div className="w-full flex justify-center  ">
                                    <div className="w-full h-[300px] flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={card.images || "/default-image.png"}
                                            alt={card.title}
                                            width={300}
                                            height={300}
                                            className="rounded-lg hover:scale-110 transition duration-300"
                                            loading="lazy" // Next/Image lazy loads by default
                                        />
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-semibold">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {card.description
                                        .split(" ")
                                        .slice(0, 5)
                                        .join(" ") +
                                        (card.description.split(" ").length > 5 ? "..." : "")}
                                </p>

                                {/* Additional Info */}
                                <div className="flex items-center gap-2">
                                    <FcRating />
                                    <div>{card.rating}</div>
                                </div>
                                <p className="flex items-center gap-1 text-green-400 text-xl font-semibold">
                                    <span className="text-gray-500">By</span> NestFood
                                </p>

                                {/* Prices and Button */}
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center justify-end gap-2">
                                        <span className="text-gray-500 line-through text-lg">
                                            ${card.fixedPrice}
                                        </span>
                                        <span className="text-xl font-semibold text-green-500">
                                            ${card.price}
                                        </span>
                                    </div>

                                    <Button className="bg-red-500 px-2 text-white hover:bg-red-600">
                                        Shop Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
