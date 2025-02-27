"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { items } from "@/lib/data";
const HeroCartDestop = () => {
  return (
   <>
    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        className="hover:shadow-lg transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-800"
                    >
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
                ))}
            </div>
   
   </>
  )
}

export default HeroCartDestop