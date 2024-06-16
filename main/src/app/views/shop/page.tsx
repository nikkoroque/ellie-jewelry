import Filter from "@/app/components/filter/Filter";
import Featured from "@/app/components/product/Featured";
import MiniCategory from "@/app/components/product/MiniCategory";
import {wixClientServer} from "@/lib/wixClientServer";
import {Suspense} from "react";

const Shop = async ({searchParams} : {searchParams:any}) => {

    const wixClient = await wixClientServer();
    const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products");
    console.log(cat);

    return (
        <div className="">
            <div className="relative h-[calc(100vh-80px)] md:h-[calc(70vh-80px)] bg-cover bg-center" style={{backgroundImage: 'url(/images/shop-hero.jpg)'}}>
                <div className="absolute inset-0 bg-black opacity-15"></div>
                {/* Optional: overlay for better text readability */}
                <div className="relative container mx-auto h-full flex items-center">
                    <div className="text-white px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64">
                        <h1 className="text-5xl lg:text-4xl 2xl:text-6xl font-semibold text-white">Demo Website</h1>
                        <p className="text-xl 2xl:text-2xl text-white">Ex iudicabit epicurei iaculis euismod aliquet vituperata!</p>
                        <button className='rounded-md bg-black text-white py-3 px-4 mt-4'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <MiniCategory />
            {/*FILTER*/}
            <div className='px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <Filter />
                {/*PRODUCTS*/}
                <h1 className='mt-12 text-xl font-semibold'>{cat.collection?.name}</h1>
                <Suspense fallback={'loading'}>
                    {/*Use all-products if id is invalid*/}
                    <Featured categoryId={cat.collection?._id || '00000000-000000-000000-000000000001'} searchParams/>
                </Suspense>
            </div>
        </div>
    )
};

export default Shop;