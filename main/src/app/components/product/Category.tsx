import Link from "next/link";
import Image from "next/image";

const Category = () => {
    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-8'>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/new.jpg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>New</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/rings.jpeg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>Rings</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/necklace.jpg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>Necklace</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/earrings.jpeg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>Earrings</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/pendants.jpeg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>Pendants</h1>
                </Link>
                <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative w-full h-96'>
                        <Image src='/images/charms.jpeg' alt='' fill sizes='20vw' className='object-cover' />
                    </div>
                    <h1 className='mt-8 font-light text-clip tracking-wide'>Charms</h1>
                </Link>
            </div>
        </div>
    )
}

export default Category;