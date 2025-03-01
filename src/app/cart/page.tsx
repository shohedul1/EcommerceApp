"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import DialogCloseButton from "./DialogCloseButton/DialogCloseButton";
import CardSection from "@/components/HomePage/components/Card/CardSection";

const SHIPPING_COST = 50; // Fixed shipping cost

const Page = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 2, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 3, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 4, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 5, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 6, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },
    { id: 7, name: "Organic Lemon", image: "/carrot.png", price: 250, quantity: 2 },

  ]);

  // ✅ Increase quantity
  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  // ✅ Decrease quantity (minimum 1)
  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  // ✅ Delete product
  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // ✅ Calculate subtotal (total of all products)
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // ✅ Calculate grand total (subtotal + shipping)
  const grandTotal = subtotal + SHIPPING_COST

  return (
    <>
      <div className="px-6 my-5 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <Table className="w-full border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
          <TableCaption className="text-gray-600 dark:text-gray-400">
            A list of your selected products.
          </TableCaption>

          {/* Table Header */}
          <TableHeader className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <TableRow>
              <TableHead className="w-[250px]">Product</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center w-16">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <TableCell className="font-medium flex items-center gap-3 py-4">
                    <div className="w-12 h-12 relative rounded-md overflow-hidden border">
                      <Image
                        src={product.image}
                        width={40}
                        height={40}
                        className="object-cover"
                        alt={product.name}
                      />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200">{product.name}</span>
                  </TableCell>
                  <TableCell className="text-center text-gray-700 dark:text-gray-300">
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center text-gray-700 dark:text-gray-300">
                    <div className="flex items-center justify-center gap-3">
                      {/* Decrease button */}
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition"
                      >
                        <MdOutlineRemoveCircleOutline size={18} />
                      </button>

                      {/* Quantity display */}
                      <span className="text-lg font-medium">{product.quantity}</span>

                      {/* Increase button */}
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white transition"
                      >
                        <FaPlus size={16} />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-gray-700 dark:text-gray-300">
                    ${(product.price * product.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">

                    <DialogCloseButton onDelete={() => handleDelete(product.id)} />

                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                  No products available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Price Summary Section */}
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Subtotal:</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Shipping Cost:</span>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">${SHIPPING_COST.toFixed(2)}</span>
          </div>
          <hr className="border-gray-300 dark:border-gray-600 my-3" />
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">Grand Total:</span>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">${grandTotal.toFixed(2)}</span>
          </div>
          <button
            className="mt-4  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <CardSection title='Our Propuler' />


    </>
  );
};

export default Page;
