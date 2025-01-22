


import Link from "next/link";

import { client } from "@/sanity/lib/client"
import Image from "next/image"


const getData = async ()=>{
    const fetchData= await client.fetch(`*[_type == "categories"] {
  _id,title, "imageUrl": image.asset->url
}`)
    return fetchData

    };
    interface catagories{
      title:string,
      imageUrl:string,
      _id:number,
     
    }


    const Categories = async() => {
 
   const SanityData = await getData()
         console.log(SanityData)

      return (
        <div>
          <h1 className="text-center text-4xl mt-20 mb-3 font-extrabold font-serif">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
        {SanityData.map((item:catagories,i:number)=>{
          
            return(
  
                 <div key={i} className="gap-6 border shadow-lg hover:scale-105 ">
                  
                  <Link href={`/categories/${item._id}`}>
              <Image 
                className="rounded-t-lg h-[300px]"
                src={item.imageUrl}
                alt="image"
                width={420}
                height={420}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                
                
                <button className="w-[100px] h-[50px] bg-black rounded-md text-white bg-opacity-50 ">buy now</button>
                
              </div>
              </Link>
              </div>
            
              
           
            )
        })}
      </div>
    </div>
      )
    }
    
    export default Categories;







