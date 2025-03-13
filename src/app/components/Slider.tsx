import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

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
  return (
    <div className='h-[calc(100vh-80px)] relative overflow-hidden flex justify-center items-center '>
        <div className='w-max h-full flex transition-all ease-in-out duration-1000'>
            {
                slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row  `} key={slide.id}>
                        {/* text container  */}
                        <div className='w-1/2 text-5xl lg:text-6xl 2xl:text-8xl font-sembold'>
                            <h2>{slide.description}</h2>
                            <h2 className=''>{slide.title}</h2>
                            <Link href={slide.url}>
                                <button>Shop Now</button>
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
      
    </div>
  )
}

export default Slider
