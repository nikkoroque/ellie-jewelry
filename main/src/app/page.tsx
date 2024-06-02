import Slider from "@/app/components/slider/Slider";
import Featured from "@/app/components/product/Featured";
import Category from "@/app/components/product/Category";
import NewProducts from "@/app/components/product/NewProducts";

const HomePage = () => {
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