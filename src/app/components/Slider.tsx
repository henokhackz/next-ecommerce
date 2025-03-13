import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval);
    })

  return (
    <div className='h-[calc(100vh-80px)] relative overflow-hidden flex justify-center items-center '>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={
            {
                transform: `translateX(-${currentSlide * 100}vw)`
            }
        }>
            {
                slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row  `} key={slide.id}>
                        {/* text container  */}
                        <div className='h-1/2 xl:w-1/2 flex flx-col items-center justify-center gap-8 2xl-gap-12 text-center '>
                            <h2 className='text-5xl lg:text-6xl 2xl:text-8xl font-sembold'>{slide.description}</h2>
                            <h2 className='text-5xl lg:text-6xl 2xl:text-8xl'>{slide.title}</h2>
                            <Link href={slide.url}>
                                <button className='bg-black text-white px-4 py-2 '>Shop Now</button>
                            </Link>
                        </div>
                        {/* image container */}
                        <div>
                            <Image src={slide.img} alt='slide' width={500} height={500}/>
                        </div>

                    </div>
                ))
            }
        </div>
        <div className='absolute bottom-4 flex gap-4 '>

                {
                    slides.map((slide) => (
                        <div className={`${currentSlide === slide.id ? 'bg-black' : 'bg-white'} w-3 h-3 rounded-full cursor-pointer`} key={slide.id} onClick={() => setCurrentSlide(slide.id)}></div>
                    ))
                }
    </div>
    </div>
  )
}

export default Slider
