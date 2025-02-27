import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardSection = ({ title }: { title: string }) => {
    const cards = [
        {
            id: 1,
            title: "Fresh Vegetables",
            description: "Organic & locally sourced vegetables.",
            image: "/logo.png",
        },
        {
            id: 2,
            title: "Quality Fruits",
            description: "Sweet and fresh seasonal fruits.",
            image: "/logo.png",
        },
        {
            id: 3,
            title: "Healthy Dairy",
            description: "Farm fresh milk and dairy products.",
            image: "/logo.png",
        },
        {
            id: 4,
            title: "Bakery & Snacks",
            description: "Delicious baked goods and healthy snacks.",
            image: "/logo.png",
        },
        {
            id: 5,
            title: "Fresh Vegetables",
            description: "Organic & locally sourced vegetables.",
            image: "/logo.png",
        },
        {
            id: 6,
            title: "Quality Fruits",
            description: "Sweet and fresh seasonal fruits.",
            image: "/logo.png",
        },
        {
            id: 7,
            title: "Healthy Dairy",
            description: "Farm fresh milk and dairy products.",
            image: "/logo.png",
        },
        {
            id: 8,
            title: "Bakery & Snacks",
            description: "Delicious baked goods and healthy snacks.",
            image: "/logo.png",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        className="hover:shadow-lg transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-800"
                    >
                        <CardContent className="flex flex-col items-center p-6">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={120}
                                height={120}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold">{card.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">
                                {card.description}
                            </p>
                            <Button className="mt-4 bg-red-500 text-white hover:bg-red-600">
                                Shop Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
