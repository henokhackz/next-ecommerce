import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl32 2xl:px-64 relative'>
      {/* mobile */}
        <div className='flex items-center justify-center h-full md:hidden  '>
            <Link href={'/'}>
            <div className='text-2xl font-bold tracking-wide '></div>
            </Link>
            <Menu/>
        </div>
        {/* desktop or tablet */}
        <div className='hiddden md:flex items-center justify-between gap-8 h-full '>
            {/* left */}
            <div className='w-1/3 xl:1/2 flex items-center gap-12 '>
                <Link href={'/' } className='flex items-cente r gap-3  '>
                    <Image src='/logo.png' alt='logo' width={100} height={100}/>
                    <div className='text-2xl font-bold tracking-wide '></div>
                </Link>
                {/* links */}
                <div className='hidden xl:flex gap-4 '>
                    <Link href={'/'}>Liyou commerce</Link> 
                    <Link href={'/'}>Deals</Link> 
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Contact</Link>
                </div>
            </div>
            {/* right  */}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8 '>
                <SearchBar/>
                <NavbarIcons/>
            </div>

        </div>
    </div>
  )
}

export default Navbar
