
import React,{useState} from "react";
import ByRank from "./optionPage/ByRank";
import ByWin from "./optionPage/ByWin";
import ByPlacement from "./optionPage/ByPlacement";

export default function ServiceOptionSection() {
  const [options,setOptions] = useState(0);
  return (
    <div className="">
    <div className="flex justify-center items-center">
      <ul
        className="flex flex-row gap-x-5 justify-center items-center bg-gray-800 px-5 py-2 text-xl rounded-xl border-solid border-2"
        id="ul-options"
      >
        <li onClick={()=>setOptions(0)} className={`transition-all ease-in-out ${options == 0?"text-red-500":""}` }>By Rank </li>|
        <li onClick={()=>setOptions(1)} className={`transition-all ease-in-out ${options == 1?"text-red-500":""}` }>By Per Win </li>|
        <li onClick={()=>setOptions(2)} className={`transition-all ease-in-out ${options == 2?"text-red-500":""}` }>Placement Matches</li>
      </ul>
    </div>
    {/* seperator */}
    <div className="my-10"></div>
    {options == 0 && <ByRank/>}
    {options == 1 && <ByWin/>}
    {options == 2 && <ByPlacement/>}
  </div>
  )
}
