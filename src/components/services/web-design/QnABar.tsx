import React from 'react'

interface props{
    question:string;
    answer:string;
    id:string;
}

export default function QnABar({question,answer,id}:props) {



  return (
    <div className="border-2 border-web-border p-4 rounded-xl px-5 bg-web-foreground drop-shadow-md">
        
    <input type="checkbox" className='hidden peer' id={"collapse"+id}/>
    <a className='peer-checked:rotate-90 inline-block text-3xl'>➡️</a>
    <label htmlFor={"collapse"+id} className='text-2xl font-bold inline-block w-[97%]'>{question}</label>  
    <div className="peer-checked:block hidden py-2">
        <div className="w-full bg-web-copy-lighter h-[1px] mb-2 "></div>
        <p >{answer}</p>
        </div>
    
  </div>    
  )
}
