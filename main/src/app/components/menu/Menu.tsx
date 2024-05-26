"use client"

import { useState } from "react";

// Icon
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <IoMenu size={28} onClick={() => setOpen((prevState) => !prevState)}/>
            {open && (
                <div className='absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Rings</Link>
                    <Link href='/'>Earrings</Link>
                    <Link href='/'>Necklaces</Link>
                    <Link href='/'>Cart(1)</Link>
                    <Link href='/'>Logout</Link>
                </div>
            )}
        </div>
    )
}

export default Menu;