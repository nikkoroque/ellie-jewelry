import Link from "next/link";
import Image from "next/image";

const Featured = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
               <div className='relative w-full h-80'>
                   <Image src='/images/f-ring.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
               </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Asymmetric</span>
                    <span className='font-semibold'>$15,095.00</span>
                </div>
                <div className='text-sm text-gray-500'>Shine in the Pandora Nova 14k Gold Lab-grown Diamond.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/f-pendant.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Bee Dangle</span>
                    <span className='font-semibold'>$7,350.00</span>
                </div>
                <div className='text-sm text-gray-500'>Be the queen you are with the Sparkling Bee Dangle Charm.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/f-earrings.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Infinity Stud</span>
                    <span className='font-semibold'>$4,750.00</span>
                </div>
                <div className='text-sm text-gray-500'>Give a symbol of your eternal connection with our Infinity Stud. </div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/images/f-bracelet.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-60 transition-opacity ease-in duration-500' />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Tennis Bracelet</span>
                    <span className='font-semibold'>$10,950.00</span>
                </div>
                <div className='text-sm text-gray-500'>This 14k gold-plated bracelet sparkles with 48 stones.</div>
                <button className='rounded-2xl ring-1 ring-black text-black py-2 px-4 text-xs hover:bg-black hover:text-white'>Add to Bag</button>
            </Link>

        </div>
    )
};

export default Featured;