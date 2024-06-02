import Link from "next/link";
import React from "react";
import Logo from "@/app/components/logo/Logo";

// Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";

const Footer = () => {

    // Current Year
    const currentYear = () => {
      return new Date().getFullYear();
    };

    return (
        <div className='py-24 px-4 md:pd-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24'>
            {/*TOP*/}
            <div className='flex flex-col md:flex-row justify-between gap-24'>
                {/*LEFT*/}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <p>1537 Diane Street Santa Barbara California 93101</p>
                    <span className='font-semibold'>demo@ellie.com</span>
                    <span className='font-semibold'>+1 818.533.1507</span>
                    <div className='flex gap-6'>
                        <FaFacebookSquare size={24} className='cursor-pointer' />
                        <FaSquareInstagram size={24} className='cursor-pointer' />
                        <FaPinterestSquare size={24} className='cursor-pointer' />
                        <FaSquareXTwitter size={24} className='cursor-pointer' />
                    </div>
                </div>
                {/*CENTER*/}
                <div className='hidden lg:flex justify-between w-1/2'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-medium text-lg'>COMPANY</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>About Us</Link>
                            <Link href=''>Careers</Link>
                            <Link href=''>Affiliates</Link>
                            <Link href=''>Blog</Link>
                            <Link href=''>Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-medium text-lg'>SHOP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>New Arrivals</Link>
                            <Link href=''>Rings</Link>
                            <Link href=''>Necklace</Link>
                            <Link href=''>Bracelet</Link>
                            <Link href=''>Earrings</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='font-medium text-lg'>FAQ</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href=''>Customer Service</Link>
                            <Link href=''>My Acount</Link>
                            <Link href=''>Legal & Privacy</Link>
                            <Link href=''>Find a Store</Link>
                            <Link href=''>Gift Card</Link>
                        </div>
                    </div>
                </div>
                {/*RIGHT*/}
                <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <div className='flex'>
                        <input type="text" placeholder='Email Address' className='p-4 w-3/4'/>
                        <button className='w-1/4 bg-ellieRed text-white'>JOIN</button>
                    </div>
                    <span className='font-semibold'>Secure Payments</span>
                    <div className='flex gap-6'>
                        <FaCcPaypal size={40} className='cursor-pointer'/>
                        <FaCcDiscover size={40} className='cursor-pointer'/>
                        <FaCcMastercard size={40} className='cursor-pointer'/>
                        <FaCcVisa size={40} className='cursor-pointer'/>
                        <FaCcAmex size={40} className='cursor-pointer'/>
                    </div>
                </div>
            </div>
            {/*BOTTOM*/}
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
                <div className=''>© {currentYear()} ELLIE DEMO</div>
                <div className='flex flex-col gap-8 md:flex-row'>
                    <div className=''>
                        <span className='text-gray-500 mr-4'>Language</span>
                        <span className='font-medium'>United States | English</span>
                    </div>
                    <div className=''>
                        <span className='text-gray-500 mr-4'>Currency</span>
                        <span className='font-medium'>$ USD</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;