import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CatagoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll '>
      <div className='flex gap-4 md:gap-8  '>
        <Link href={'/list?cat=test'}>
          <div className='relative bg-slate-199 w-full h-96'>
            <Image src={'https://images.pexels.com/photos/18372421/pexels-photo-18372421/free-photo-of-smiling-woman-in-traditional-dress.jpeg?auto=compress&cs=tinysrgb&w=400'} alt='product' fill sizes='20vw' className='object-cover' />
          </div>
          <h1 className='mt-8 font-light text-xl tracking-wide'>Catagory-Name </h1>
        </Link>
      </div>
    </div>
  )
}

export default CatagoryList
