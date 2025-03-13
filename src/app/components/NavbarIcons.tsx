'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CartModal from './CartModal'

const NavbarIcons = () => {


    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const router = useRouter()

    const isLoggedIn = false
  
    const handleProfile = () => {
        if(!isLoggedIn){
            router.push('/login')
        }
        setIsProfileOpen((prev) => !prev)
    }  
  return (
    <div className='flex items-center gap-4 xl:gap-6 '>
      <Image src={'/profile.png'} 
      onClick={handleProfile}
      alt='profile' width={22} height={22}/> 
      {isProfileOpen && (
          <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_0_10px_rgba(0,0,0,0.2)] z-20'>
            <Link href={'/profile'}>Profile</Link>
            <div className='mt-2 cursor-pointer '>Logout</div>
          </div>
      )}

      <Image src={'/notification.png'} alt='notification' width={22} height={22}/> 
      <div className='relative cursor-pointer '>
        <Image src={'/cart.png'} alt='cart' width={22} height={22} onClick={()=>setIsCartOpen((prev) => !prev)}/>
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-red rounded-full text-white text-sm flex items-center justify-center'
        
        ></div>
      </div>
      {isCartOpen && (
          <CartModal/>
      )}
    </div>
  )
}

export default NavbarIcons
