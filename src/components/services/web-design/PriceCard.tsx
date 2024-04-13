import { motion, type Variants } from "framer-motion";
interface Props{
  title:string
  price: number;
}

const cardVariants: Variants = {
  'onscreen': {},
  'offscreen': {}
}


export default function PriceCard({title,price  }: Props) {
  

  return (
    <div className="text-center p-5 rounded-lg drop-shadow-lg group transition-all ease-out">
      <div className="bg-web-foreground bg-opacity-70 backdrop-blur-sm p-5 rounded-t-xl" >
        <h1 className="text-xl font-bold text-web-primary-content group-hover:text-3xl transition-all ease-out">{title}</h1>
      
        <p className="text-md text-web-copy-light mb-5">RM {price}</p>
        <button className="p-2 bg-web-copy text-web-background rounded-xl font-bold hover:bg-web-copy-light w-3/4 transition-all ease-out">
          Contact Now</button>
      </div>
      <div className="bg-web-background bg-opacity-50 backdrop-blur-sm rounded-b-xl p-5">
        <ul className="text-md text-web-copy-light text-left ml-5 gap-y-4 flex flex-col">
          <li>5 Pages</li>
          <li>1 Year Free Hosting</li>
          <li>1 Year Free Domain</li>
          <li>SEO</li>
          <li>Mobile Responsive</li>
          <li>Mobile Responsive</li>
          <li>Mobile Responsive</li>
          <li>Mobile Responsive</li>
        </ul>
      </div>
    </div>
  );
}


