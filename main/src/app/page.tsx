"use client"

import Slider from "@/app/components/slider/Slider";
import Featured from "@/app/components/product/Featured";
import Category from "@/app/components/product/Category";
import NewProducts from "@/app/components/product/NewProducts";
import {useContext, useEffect, useState} from "react";
import {useWixClient} from "@/hooks/useWixClient";


const HomePage = () => {

    const wixClient = useWixClient();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await wixClient.products.queryProducts().find();
                console.log(res);
            } catch (error: any) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, [wixClient]);


  return (
      <div className="">
          <Slider/>
          <div className='mt-24 px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64'>
              <h1 className='text-2xl'>Featured Products</h1>
              <Featured/>
          </div>
          <div className='mt-24'>
              <h1 className='text-2xl px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12'>Categories</h1>
              <Category/>
          </div>
          <div className='mt-24 px-4 md-:px-8 lg:px-16 xl:px-32 2xl:px-64'>
              <h1 className='text-2xl'>New Products</h1>
              <NewProducts/>
          </div>
      </div>
  )
}

export default HomePage;