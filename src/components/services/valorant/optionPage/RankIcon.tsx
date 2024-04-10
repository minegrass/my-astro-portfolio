import React from 'react'
interface RankIconProps {
    imgHref: string;
    rankTitle: string;
    price: number;
    }
export default function RankIcon({imgHref,rankTitle,price}: RankIconProps) {
    
  return (
    <div className="flex flex-col justify-center items-center   ">
    <div className='w-[80px] h-[80px] rounded-full p-2 bg-white hover:p-1 transition-all ease-in-out'><img className='rounded-full' src={imgHref}/></div>
    <h1 className='text-sm md:text-l lg:text-xl font-bold'>{rankTitle}</h1>
    <p className="text-sm md:text-md text-yellow-300">RM {price}</p>
    </div>
  )
}
