import React from 'react'
import RankIcon from './RankIcon'
export default function ByPlacement() {
  return (
    <div className="flex flex-col">
        <p className='text-gray-200 text-sm self-center mb-2'>**Prices are all negotiable** Contact directly to get more info</p>
    <div className='grid md:grid-cols-4 lg:grid-cols-5 grid-cols-3 gap-y-5'>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Below Ascendant' price={6}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Above Ascendant' price={7}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='x5 below ascendannt' price={25}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='x5 Above Ascendant' price={30}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='x10 no matter rank' price={55}/>
    </div>
    </div>
  )
}
