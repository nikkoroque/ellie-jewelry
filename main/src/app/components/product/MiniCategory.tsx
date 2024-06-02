import Link from "next/link";
import Image from "next/image";
import minicat from "@/app/data/minicat";

const MiniCategory = () => {
    return (
        <div className='py-8 px-4 overflow-x-scroll scrollbar-hide'>
            <div className='flex gap-4 md:gap-4'>
                {minicat.map((cat) => (
                    <Link href={cat.url} className='flex-shrink-0 w-40 sm:w-1/6 xl:w-1/12' key={cat.id}>
                        <div className='relative w-full h-20'>
                            <Image src={cat.img} alt='' fill sizes='40vw' className='object-contain' />
                        </div>
                        <h1 className='mt-2 font-light text-clip tracking-wide text-center text-xs'>{cat.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MiniCategory;