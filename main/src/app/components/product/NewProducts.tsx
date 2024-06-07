import Link from "next/link";
import Image from "next/image";

const NewProducts = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/views/product" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/np-bracelet.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Infinite Diamond</span>
                    <span className='font-semibold'>$19,990.00</span>
                </div>
                <div className='text-sm text-gray-500'>Celebrate your power to shine with this Infinite 14k Gold.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/views/product" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/np-necklace.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Collier Necklace</span>
                    <span className='font-semibold'>$18,580.00</span>
                </div>
                <div className='text-sm text-gray-500'>Add a warm glow with our 14k gold-plated finish.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/views/product" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/np-pendant.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Diamond Heart</span>
                    <span className='font-semibold'>$9,990.00</span>
                </div>
                <div className='text-sm text-gray-500'>This 14k gold pendant features a unique setting. </div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/views/product" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/np-charm.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Pavé Clip Charm</span>
                    <span className='font-semibold'>$16,560.00</span>
                </div>
                <div className='text-sm text-gray-500'>Sparkling clear stones create a striking contrast.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>

        </div>
    )
};

export default NewProducts;