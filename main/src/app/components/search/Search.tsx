"use client"

// Icons
import { IoSearch } from "react-icons/io5";
import {useRouter} from "next/navigation";

const Search = () => {

    const router = useRouter();

    const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name) {
            router.push(`/views/shop?name=${name}`)
        }
    };

    return (
        <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input type='text' name='name' placeholder='Search' className='flex-1 bg-transparent outline-none' />
            <button className='cursor-pointer'>
                <IoSearch size={16}/>
            </button>
        </form>
    )
}

export default Search;