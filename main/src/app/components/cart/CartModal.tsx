"use client"

import Image from "next/image";

const CartModal = () => {

    const cartItems = true;

    return (
        <div
            className={'w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'}>
            {!cartItems ? (
                // If cart is empty
                <div className=''>Cart is Empty</div>
            ) : (
                <div className='flex flex-col gap-8'>
                    // If cart is not empty list products
                    <div className='flex gap-4'>
                        <Image src='https://images.pexels.com/photos/7992684/pexels-photo-7992684.jpeg' alt='' width={72} height={96} className='object-cover rounded-md'/>
                        <div className='flex flex-col justify-between w-full'>
                            {/*TOP*/}
                            <div className='flex items-center justify-between gap-8'>
                                {/*TITLE*/}
                                <div className='font-semibold'>
                                    <h3>Product Name</h3>
                                    <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                                </div>
                                {/*DESC*/}
                                <div className='text-sm text-gray-500'>
                                    available
                                </div>
                            </div>
                            {/*BOTTOM*/}
                            <div className='flex justify-between text-sm'>
                                <span className='text-gray-500'>Qty 2</span>
                                <span className='text-blue-500'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartModal;