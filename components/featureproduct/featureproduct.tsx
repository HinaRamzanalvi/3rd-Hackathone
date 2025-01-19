


import cartall from "@/components/public/cartall.svg";

import { client } from "@/sanity/lib/client"
import Image from "next/image"


const getData = async ()=>{
    const fetchData= await client.fetch(`*[_type == "products"] [4..7]{
   _id,title,price,
   "imageUrl":image.asset->url
 }`)
    return fetchData

    };
    interface catagories{
      title:string,
      imageUrl:string,
      price:number,
     
    }


    const Categories = async() => {
 
   const SanityData = await getData()
         console.log(SanityData)

      return (
        <div>
          <h1 className="text-center text-4xl mt-20 mb-3 font-extrabold font-serif">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        {SanityData.map((item:catagories,i:number)=>{
          
            return(
  
                 <div key={i} className="gap-6 border shadow-lg hover:scale-105 ">
              <Image 
                className="rounded-t-lg h-[250px]"
                src={item.imageUrl}
                alt="image"
                width={300}
                height={300}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-700 font-serif dark:text-white">
                  {item.title}
                </h5>
                
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ${item.price}
                </p>

           <p>
           <Image src={cartall} alt="cart" className="w-11 h-11" />
           </p>
        
      
      

              </div>
              </div>
            
              
           
            )
        })}
      </div>
    </div>
      )
    }
    
    export default Categories;







