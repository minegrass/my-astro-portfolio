import React from 'react'
import RankIcon from './RankIcon'
export default function ByRank() {
  return (
    <div className="flex flex-col">
        <p className='text-gray-200 text-sm self-center mb-2'>**Prices are all negotiable** Contact directly to get more info</p>
    <div className='grid md:grid-cols-4 lg:grid-cols-5 grid-cols-3 gap-y-5'>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Bronze' price={2.5}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Silver' price={8}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Gold' price={10}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Platinum' price={14}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Diamond' price={20}/>

        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Ascendant' price={26}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Ascendant 3 To Immortal 1' price={40}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Immortal 1 -> 2' price={85}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Immortal 2 -> 3' price={150}/>
        <RankIcon imgHref='https://placehold.co/400x400' rankTitle='Immortal 3 above per rr' price={2}/>
    </div>
    </div>
  )
}
