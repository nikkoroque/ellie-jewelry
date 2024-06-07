"use client"

import {useState} from "react";

const Add = () => {

    // TODO : Delete
    const stock = 4;

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type : "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prevState) => prevState - 1);
        }

        if (type === "i" && quantity < stock) {
            setQuantity((prevState) => prevState + 1);
        }
    };
    return (
        <div className='flex flex-col gap-4'>
            <div className='h-[2px] bg-gray-100'/>
            <div className='flex justify-between'>
                <div className=''><h4 className='font-medium'>Quantity</h4></div>
                <div className='flex items-center gap-4'>
                    <button className='text-xl cursor-pointer' onClick={() => handleQuantity("d")}> - </button>
                    {quantity}
                    <button className='text-xl cursor-pointer' onClick={() => handleQuantity("i")}> + </button>
                </div>
            </div>
            <div className=''><p className='text-xs'>Only <span className='text-ellieRed'>4 items</span> left! {"Don't"} miss it!</p></div>
            <div className='h-[2px] bg-gray-100'/>
            <button
                className='w-full text-sm rounded-md ring-1 ring-black text-black py-4 px-4 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-300 disabled:ring-gray-300'>Add
                to Bag
            </button>
        </div>
    )
};

export default Add;