const Attributes = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h4 className='font-medium'>Available Metals</h4>
            <ul className='flex items-center gap-3'>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#E7BA6F]'>
                    <div
                        className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    </div>
                </li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#B76E79]'></li>
                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-[#FFFFF4]'>
                    <div
                        className='absolute w-10 h-[2px] bg-ellieRed rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    </div>
                </li>
            </ul>
            <h4 className='font-medium'>Size</h4>
            <ul className='flex items-center gap-3'>
                <li className='ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer'>6.3 in</li>
                <li className='ring-1 ring-black text-white bg-black rounded-md py-1 px-4 text-sm cursor-pointer'>7.1 in</li>
                <li className='ring-1 ring-gray-300 text-gray-300 rounded-md py-1 px-4 text-sm cursor-not-allowed'>7.9 in</li>
            </ul>
        </div>
    )
};

export default Attributes;