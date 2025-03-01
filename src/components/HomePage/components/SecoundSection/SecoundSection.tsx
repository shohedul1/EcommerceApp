import ProductCard from "./ProductCard";

const SecondSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:bg-black bg-white text-black dark:text-white p-5 my-5">
            {
                [...Array(5)].map((_, index) => {
                    const price = 200 + index * 50; // Example: price changes per index
                    return <ProductCard key={index} index={index} price={price} />
                })
            }
        </div>
    );
};

export default SecondSection;

