"use client"

import {useEffect, useState} from "react";
import slides from "@/app/data/slides";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {

    const [current,setCurrent] = useState(0);

    // Slider loop method
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevState) => (prevState === slides.length-1 ? 0 : prevState + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-[calc(100vh-80px)] md:h-[calc(60vh-80px)] overflow-hidden'>
            <div className='w-max h-full flex transition-all ease-in-out duration-1000'
                 style={{transform: `translateX(-${current * 100}vw)`}}>
                {slides.map((slide, index) => (
                    <div className={`${slide.bg} w-screen h-full relative`} key={slide.id}>
                        {/* IMAGE CONTAINER */}
                        <div className='w-full h-full relative'>
                            <Image src={slide.img} alt='' fill sizes='100%' className='object-cover'/>
                        </div>
                        {/* TEXT CONTAINER */}
                        <div
                            className={`absolute inset-0 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center p-4 ${index % 2 === 0 ? 'text-left left-0' : 'text-right right-0'}`}>
                            <h2 className='text-xl lg:text-3xl 2xl:text-5xl text-white'>{slide.description}</h2>
                            <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-white'>{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className='rounded-md bg-black text-white py-3 px-4'>SHOP NOW</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className='relative m-auto justify-center bottom-8 flex gap-4'>
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""}`}
                        key={slide.id} onClick={() => setCurrent(index)}>
                        {current === index && (<div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;