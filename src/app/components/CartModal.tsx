import Image from 'next/image'
import React from 'react'

const  CartModal = () => {
  const cartItems = false
  return (
    <div className='absolute p-4 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col  '>
      {
        !cartItems ? (
           <div className=''>
             Your cart is empty
           </div>
        ):(
          // list

          <>
              // list
              <h3 className='text-xl font-semibold mb-4'>Shopping Cart</h3>
              <div className='flex flex-col gap-8 '>
                {/* item */}
                <div className='flex gap-4  '>
                  <Image src='https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400' alt='cart' width={72} height={96}
                    className='object-cover rounded-md' />
                  <div className='flex flex-cl justify-between w-full  '>
                    {/* top */}
                    <div>
                      {/* title */}
                      <div className='flex items-center justify-between gap-8  '>
                        <h3 className='font-sembold '>Product Name</h3>
                        {/* price  */}
                        <div className='p-1 bg-gray50 rounded-sm'>
                          $10
                        </div>

                      </div>
                    </div>
                    {/* desc */}
                    <div>
                      available
                    </div>
                    {/* bottom */}
                    <div className='text-sm flex justy -between '>
                      <span className='text-gray-500'>Qty:</span>
                      <span className='text-blue-500'> classNam</span>
                    </div>
                  </div>
                </div>
              </div>
              //bottom
              <div>
                <div className='flex justify-between items-center font-semibold'>
                  <span className=''>
                    subt0tal
                  </span>
                  <span>

                  </span>

                </div>
                <p className='text-gray-500 text-sm mt-2 mb-4     '>
                  Lorem ipsum dolor sit amet.
                </p>
                <div className='flex justify-between text-sm'>
                   <button className='bg-gray-200 py-2 px-4 rounded-md ring-1 ring-gray-300 '>view Cart</button>
                   <button className='bg-black py-2 px-4 rounded-md ring-1 tex-white '>Checkout Cart</button>
                </div>
              </div></>
        )
      }
    </div>
   
  )
}

export default  CartModal
