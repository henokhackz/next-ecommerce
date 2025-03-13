import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link  href={'/test'} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
      <div className='relative  w-full flex flex-col gap-4 '>

      <Image src={'https://images.pexels.com/photos/18372421/pexels-photo-18372421/free-photo-of-smiling-woman-in-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=400'} alt='product'   fill sizes='25vw  '
      className='absolute object-cover rounded-md z-10 hover:opacity-0  transition-opacity ease-in-out duration-300'
      />
       <Image src={'https://images.pexels.com/photos/18372421/pexels-photo-18372421/free-photo-of-smiling-woman-in-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=400'} alt='product'   fill sizes='25vw  '
      className='absolute object-cover rounded-md'
      />
      </div>
      <div className='flex justify-between'>
        <span className='font-medium'>Product Name</span>
        <span className='font-medium'>
          $10
        </span>
      </div>
      <div className='text-sm text-gray-500 '>
        Product description
      </div>
      <button className='bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors ease-in-out duration-300 '>Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
