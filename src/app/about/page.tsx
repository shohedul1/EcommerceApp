import React from 'react';

const Page = () => {
    return (
        <div className="px-5 md:px-20 py-10 bg-red-200 dark:bg-gray-900">
            <div className="flex flex-col gap-7">
                <div className="text-3xl font-bold text-center md:text-left text-gray-800 dark:text-white">
                    About The Carrot
                </div>

                <div className="flex flex-col gap-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                        necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                        rerum quod. Tempora magni autem a voluptatibus neque.
                    </p>
                </div>

                <div className="p-2 flex flex-wrap items-center justify-center gap-5 md:gap-20">
                    {
                        [...Array(3)].map((item, index) => (
                            <div key={index} className="flex flex-col text-red-400 p-4 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-500 dark:bg-gray-400 rounded-lg shadow-lg">
                                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">0.1</p>
                                <span className="text-sm text-gray-600 dark:text-white">Vendors</span>
                            </div>

                        ))
                    }

                </div>


            </div>
        </div>
    );
};

export default Page;
