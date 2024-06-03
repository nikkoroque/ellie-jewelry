import Gallery from "@/app/components/product/Gallery";
import Attributes from "@/app/components/product/Attributes";
import Add from "@/app/components/product/Add";

const Product = () => {
    return (
        <div className='py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
            {/*IMAGE*/}
            <div className='w-full lg:w-1/2 lg:stick top-20 h-max'>
                <Gallery />
            </div>
            {/*TEXT*/}
            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                <h1 className='text-4xl font-medium'>Tennis Bracelet</h1>
                <p className='text-gray-500'>
                    Salutatus brute facilis quaerendum scelerisque appetere postea affert civibus natoque mazim
                    fringilla lobortis novum.
                </p>
                <div className='h-[2px] bg-gray-100'/>
                <div className='flex items-center gap-4'>
                    <h3 className='text-xl text-gray-500 line-through'>$10,950.00</h3>
                    <h2 className='font-medium text-2xl'>$9,900.00</h2>
                </div>
                <div className='h-[2px] bg-gray-100'/>
                <Attributes/>
                <Add/>
                <div className='h-[2px] bg-gray-100'/>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren,
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Product;