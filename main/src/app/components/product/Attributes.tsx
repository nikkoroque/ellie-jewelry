"use client"
import { products } from "@wix/stores";
import {useState} from "react";

const Attributes = ({productId, variants, productOptions} : {productId: string, variants : products.Variant[], productOptions: products.ProductOption[]}) => {

    const [selectedOptions, setSelectedOptions] = useState<{[key: string] : string}>({});

    const handleOptionSelect = (optionType: string, choice: string) => {
        setSelectedOptions((prevState) => ({ ...prevState, [optionType]: choice}));
    }

    // Check for combination of variants
    const isVariantInStock = (choices: {[key:string]: string}) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false;

            return(
                Object.entries(choices).every(
                ([key, value]) => variantChoices[key] === value) && variant.stock?.inStock && variant.stock?.quantity && variant.stock?.quantity > 0
            );
        });
    };

    return (
        <div className='flex flex-col gap-6'>
            {productOptions.map((option) =>(
                <div className='flex flex-col gap-4' key={option.name}>
                    <h4 className='font-medium'>Choose a {option.name}</h4>
                    <ul className='flex items-center gap-3'>
                        {option.choices?.map((choice) => {
                            const disabled = !isVariantInStock({
                                ...selectedOptions,
                                [option.name!]: choice.description!
                            });
                            const selected = selectedOptions[option.name!] === choice.description;

                            const clickHandler = disabled ? undefined : () => handleOptionSelect(option.name!, choice.description!);

                            return option.name === 'Metal Color' ? (
                                <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 relative' style={{
                                    backgroundColor: choice.value,
                                    cursor: disabled ? 'not-allowed' : 'pointer',
                                }} onClick={clickHandler} key={choice.description}>
                                    {selected && <div
                                        className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>}
                                    {disabled && <div
                                        className='absolute w-10 h-[2px] bg-ellieRed rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>}
                                </li>
                            ) : (
                                <li className='ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer disabled: ring-gray-300'
                                    key={choice.description} style={{cursor: disabled ? 'not-allowed' : 'pointer', backgroundColor: selected ? 'black' : disabled ? '#EBEDED' : 'white', color: selected || disabled ? '#d0d0d0' : 'black' }} onClick={clickHandler}>{choice.description}</li>
                            )
                        })}
                    </ul>
                </div>
                ))}
        </div>
        // <div className='flex flex-col gap-6'>
        //     <h4 className='font-medium'>Available Metals</h4>
        //     <ul className='flex items-center gap-3'>
        //         <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#E7BA6F]'>
        //             <div
        //                 className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        //             </div>
        //         </li>
        //         <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#B76E79]'></li>
        //         <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-[#FFFFF4]'>
        //             <div
        //                 className='absolute w-10 h-[2px] bg-ellieRed rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        //             </div>
        //         </li>
        //     </ul>
        //     <h4 className='font-medium'>Size</h4>
        //     <ul className='flex items-center gap-3'>
        //         <li className='ring-1 ring-black text-black rounded-md py-1 px-4 text-sm cursor-pointer'>6.3 in</li>
        //         <li className='ring-1 ring-black text-white bg-black rounded-md py-1 px-4 text-sm cursor-pointer'>7.1 in</li>
        //         <li className='ring-1 ring-gray-300 text-gray-300 rounded-md py-1 px-4 text-sm cursor-not-allowed'>7.9 in</li>
        //     </ul>
        // </div>
    )
};

export default Attributes;