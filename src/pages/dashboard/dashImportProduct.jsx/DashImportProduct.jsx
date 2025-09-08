import React from 'react';

const DashImportProduct = () => {
    return (
        <div className='pt-16 '>
            <form className=" px-4 space-y-4 " action="" method="">
                <input
                    type="file"
                    id="image"
                    name="image"
                    placeholder="product Image"
                    className="w-full border border-primaryColor rounded-lg lg:pl-12 py-3 outline-none	bg-transparent "
                />

                <input
                    type="text"
                    id="product_name"
                    name="product_name"
                    placeholder="product Name"
                    className="w-full border border-primaryColor rounded-lg py-3 px-5 outline-none	bg-transparent"
                />

                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="product Title"
                    className="w-full border border-primaryColor rounded-lg py-3 px-5 outline-none	bg-transparent"
                />

                <textarea
                    id="description"
                    name="description"
                    placeholder="Product Description"
                    className="w-full p-4 bg-transparent border border-primaryColor rounded-lg outline-none resize-none min-h-[250px]"
                />
                <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] w-full">
                    Import Data
                </button>
            </form>
        </div>
    );
};

export default DashImportProduct;