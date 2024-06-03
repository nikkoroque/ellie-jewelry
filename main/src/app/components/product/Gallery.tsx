"use client"

import Image from "next/image";
import galleryImg from "@/app/data/galleryImg";
import {useState} from "react";

const Gallery = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className=''>
            <div className='h-[500px] relative'>
                <Image src={galleryImg[index].url} alt='' fill sizes='50vw' className='object-cover rounded-md' />
            </div>
            <div className='flex justify-between gap-4 cursor-pointer'>
                {galleryImg.map((img,i) => (
                    <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={() => setIndex(i)}>
                        <Image src={img.url} alt='' fill sizes='30vw'
                               className='object-cover rounded-md'/>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Gallery;