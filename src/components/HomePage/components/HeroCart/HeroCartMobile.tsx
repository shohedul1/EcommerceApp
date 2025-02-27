'use client';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { items } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroCartMobile = () => {
    return (
        <>
            <div className="md:hidden">
                <Carousel className="w-full">
                    <CarouselContent>
                        {items.map((item) => (
                            <CarouselItem key={item.id} className="p-2">
                                <Card className="hover:shadow-lg transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-800">
                                    <CardContent className="flex flex-col items-center p-6">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={120}
                                            height={120}
                                            className="rounded-lg mb-4"
                                        />
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-center">
                                            {item.description}
                                        </p>
                                        <Button className="mt-4 bg-red-500 text-white hover:bg-red-600">
                                            Shop Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default HeroCartMobile