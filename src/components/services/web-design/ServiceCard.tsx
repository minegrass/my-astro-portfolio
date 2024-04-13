import React from 'react'
interface Props{
  title:string;
  description:string;
  icon:string;
}

export default function ServiceCard({title,description,icon}:Props) {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-x-5 bg-web-foreground m-2 p-2 rounded-xl">
        <img className='w-60 h-60 rounded-xl' src={icon} alt={title}/>
        <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-md text-copy-light">{description}</p>
        </div>
    </div>

  )
}
