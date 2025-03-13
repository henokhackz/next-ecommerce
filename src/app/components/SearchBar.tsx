import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'


const SearchBar = () => {
    const router = useRouter()
    

    const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        if(name){
            console.log(name)
            router.push(`/list/${name}`)
        }
    }


  return (
    <form className='flex items-center justify-between gap-4 bg-gray-1000 rounded-md fle  x-1'>
      <input type='text'  className='flex-1 bg-transparent outline-none'/>
      <button className='cursor-pointer'>
        <Image src='/search.png' alt='' width={16} height={16}/>
      </button>
    </form>
  )
}

export default SearchBar
