import Gallery from "@/app/components/product/Gallery";
import Attributes from "@/app/components/product/Attributes";
import Add from "@/app/components/product/Add";
import ProductList from "@/app/components/product/ProductList";
import {wixClientServer} from "@/lib/wixClientServer";
import {notFound} from "next/navigation";

const Product = async ({ params } : { params : { slug : string }}) => {
    console.log(params.slug);
    const wixCLient = await wixClientServer();

    const products = await wixCLient.products.queryProducts().eq("slug", params.slug).find();

    // If product does not exists then return notFound(NextJS)
    if(!products.items[0]) {
        return notFound();
    }

    // If product exists get product
    const product = products.items[0];

    console.log(product.variants);

    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
            <div className='py-8 relative flex flex-col lg:flex-row gap-16'>
                {/*IMAGE*/}
                <div className='w-full lg:w-2/3 lg:sticky top-20 h-max'>
                    <Gallery items={product.media?.items}/>
                </div>
                {/*TEXT*/}
                <div className='w-full lg:w-1/3 lg:sticky top-20 h-max flex flex-col gap-6'>
                    <h1 className='text-4xl font-medium'>{product.name}</h1>
                    <p className='text-gray-500'>
                        {product.description}
                    </p>
                    <div className='h-[2px] bg-gray-100'/>
                    {product.price?.price === product.price?.discountedPrice ? (
                        <h3 className='font-medium text-2xl'>{product.price?.formatted?.price}</h3>
                    ) : (
                        <div className='flex items-center gap-4'>
                            <h3 className='text-xl text-gray-500 line-through'>{product.price?.formatted?.price}</h3>
                            <h2 className='font-medium text-2xl'>{product.price?.formatted?.discountedPrice}</h2>
                        </div>
                    )}
                    <div className='h-[2px] bg-gray-100'/>
                    {product.variants && product.productOptions && <Attributes productId = {product._id!} variants={product.variants} productOptions={product.productOptions}/>}
                    <Add/>
                    <div className='h-[2px] bg-gray-100'/>
                    <div className='text-sm'>
                        <h4 className='font-medium mb-4'>Product Details</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo
                            dolores et ea rebum. Stet clita kasd gubergren,
                        </p>
                    </div>
                    <div className='text-sm'>
                        <h4 className='font-medium mb-4'>Size Guide</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo
                            dolores et ea rebum. Stet clita kasd gubergren,
                        </p>
                    </div>
                    <div className='text-sm'>
                        <h4 className='font-medium mb-4'>Shipping & Returns</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo
                            dolores et ea rebum. Stet clita kasd gubergren,
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-[2px] bg-gray-100'/>
            <h1 className='text-2xl font-medium py-4'>Similar Products</h1>
            <ProductList categoryId={process.env.NEW_PRODUCTS_ID!} limit={4} />
        </div>
    )
};

export default Product;