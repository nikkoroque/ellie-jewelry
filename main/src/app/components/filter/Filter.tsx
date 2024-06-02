const Filter = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='flex gap-6'>
                <select name='type' className='py-2 px-4 rounded-md text-xs font-medium bg-ellieGray'>
                    <option>Colour</option>
                    <option value='white'>White</option>
                    <option value='yellow'>Yellow</option>
                    <option value='rose'>Rose</option>
                    <option value='whiteYellow'>White Yellow</option>
                    <option value='roseWhite'>Rose White</option>
                </select>
                <input type='text' name='min' placeholder='Min. Price'
                       className='text-xs rounded-md pl-2 w-24 ring-gray-400'/>
                <input type='text' name='max' placeholder='Max Price'
                       className='text-xs rounded-md pl-2 w-24 ring-gray-400'/>
                <select name='type' className='py-2 px-4 rounded-md text-xs font-medium bg-ellieGray'>
                    <option>Metal</option>
                    <option value='white'>Gold</option>
                    <option value='yellow'>Platinum</option>
                    <option value='rose'>Silver</option>
                </select>
                <select name='type' className='py-2 px-4 rounded-md text-xs font-medium bg-ellieGray'>
                    <option>Stones</option>
                    <option value='white'>Daimond</option>
                    <option value='yellow'>Lab-Diamond</option>
                    <option value='rose'>Moissanite</option>
                    <option value='whiteYellow'>Swarovski</option>
                    <option value='roseWhite'>Sapphire</option>
                </select>
            </div>
            <div className=''>
                <select name='type' className='py-2 px-4 rounded-md text-xs font-medium bg-ellieGray'>
                    <option>Sort By</option>
                    <option value='white'>Price (high to low)</option>
                    <option value='yellow'>Price (low to high)</option>
                    <option value='rose'>Newest</option>
                    <option value='whiteYellow'>Oldest</option>
                </select>
            </div>
        </div>
    )
};

export default Filter;