import Link from "next/link";
import Menu from "@/app/components/menu/Menu";
import Logo from "@/app/components/logo/Logo";
import Search from "@/app/components/search/Search";
import NavIcons from "@/app/components/navbar/NavIcons";

const Navbar = () => {
    return (
        <div className = 'h-20 px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            <div className='h-full flex items-center justify-between md:hidden'>
                {/* MOBILE */}
                <Logo />
                <Menu />
            </div>
            {/*BIGGER SCREENS*/}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/*LEFT*/}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Logo />
                    <div className='hidden xl:flex gap-4'>
                        <Link href='/'>Diamonds</Link>
                        <Link href='/'>Rings</Link>
                        <Link href='/'>Earrings</Link>
                        <Link href='/'>Necklaces</Link>
                    </div>
                </div>
                {/*RIGHT*/}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <Search />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar;