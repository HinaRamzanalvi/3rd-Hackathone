//    import Image from "next/image"
//    import cata1 from "@/components/public/cata1.svg";
//    import cata2 from "@/components/public/cata2.svg";
//    import cata3 from "@/components/public/cata3.svg";
//  {/* Top categories */}
      
// export default function Categories(){
//     return(
//     <div>
        
// <div className="max-w-screen-xl mx-auto px-4 mt-6">
//   {/* Section Header */}
//   <p className="text-2xl md:text-3xl font-bold text-center mb-6">Top Categories</p>

//   {/* Categories Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {/* Category 1 */}
//     <div className="relative group hover:scale-105">
//       <Image src={cata1} alt="cata1" className="w-full h-auto rounded-md" />
//       <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
//         <h1 className="text-white font-bold text-lg">Wing Chair</h1>
//         <p className="text-white text-sm">3,584 Products</p>
//       </div>
//     </div>

//     {/* Category 2 */}
//     <div className="relative group hover:scale-105">
//       <Image src={cata2} alt="cata2" className="w-full h-auto rounded-md" />
//       <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
//         <h1 className="text-white font-bold text-lg">Wooden Chair</h1>
//         <p className="text-white text-sm">157 Products</p>
//       </div>
//     </div>

//     {/* Category 3 */}
//     <div className="relative group hover:scale-105">
//       <Image src={cata3} alt="cata3" className="w-full h-auto rounded-md" />
//       <div className="absolute bottom-0 left-0 w-full h-[85px] bg-black bg-opacity-75 flex flex-col justify-center px-4">
//         <h1 className="text-white font-bold text-lg">Desk Chair</h1>
//         <p className="text-white text-sm">154 Products</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//     )}






import { client } from "@/sanity/lib/client"
import Image from "next/image"


const getData = async ()=>{
    const fetchData= await client.fetch(`*[_type == "categories"]{
  _id,title, "imageUrl": image.asset->url
}`)
    return fetchData

    };
    interface catagories{
      title:string,
      imageUrl:string,
     
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
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.price}
                </p> */}
                <button className="w-[100px] h-[50px] bg-black rounded-md text-white bg-opacity-50 ">buy now</button>
              </div>
              </div>
            
              
           
            )
        })}
      </div>
    </div>
      )
    }
    
    export default Categories;







