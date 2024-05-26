"use client"

// Icons
import { FaRegCircleUser } from "react-icons/fa6";
import { RiNotificationLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import CartModal from "@/app/components/cart/CartModal";


const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    const isLoggedIn = false;

    const handleProfile = () => {
        // if(!isLoggedIn) {
        //     router.push("/login");
        // }
        setIsProfileOpen(prevState => !prevState);
        console.log("CLICKED");
    };

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            < FaRegCircleUser size={24} className='cursor-pointer' onClick={handleProfile} />
            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                    <div className='m-2 cursor-pointer'><Link href='/'>Profile</Link></div>
                    <div className='m-2 cursor-pointer'>Logout</div>
                </div>
            )}
            < RiNotificationLine size={24} className='cursor-pointer' />
            <div className='relative cursor-pointer'>
                < HiOutlineShoppingBag size={24} className='cursor-pointer' onClick={() => setIsCartOpen((prevState) => !prevState)} />
                <div className='absolute -top-2 -right-2 w-5 h-5 bg-ellieRed rounded-full text-white text-xs flex items-center justify-center'>2</div>
            </div>
            {isCartOpen && (
                <CartModal />
            )}
        </div>
    )
}

export default NavIcons;