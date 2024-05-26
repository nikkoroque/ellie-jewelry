// components/Logo.tsx
import Link from "next/link";
import React from 'react';

const Logo = () => {
    return (
        <Link href="/">
            <div className='text-2xl tracking-wide cursor-pointer'>
                ELLIE
            </div>
        </Link>
    );
};

export default Logo;
