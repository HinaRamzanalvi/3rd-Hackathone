


import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

import cartall from "@/components/public/cartall.svg";

const getData = async () => {
  const fetchData = await client.fetch(`*[_type == "products"]{
   _id,title,price,
   "imageUrl":image.asset->url
 }`);
  return fetchData;
};{}

interface sanitydata {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
}

const Productlist = async () => {
  const SanityData = await getData();
  console.log(SanityData);
  
  return (
    <div>
      <h1 className=" mt-5 ml-6 text-6xl mb-3 font-extrabold font-serif">
        All products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
  {SanityData.map((item: sanitydata, i: number) => {
    return (
      <div key={i} className="gap-6 border shadow-lg hover:scale-105">
          <Link href={`/product/${item._id}`}>
        <Image
          className="rounded-t-lg h-[350px] w-full object-cover"
          src={item.imageUrl}
          alt={item.title}
          width={400}
          height={400}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <div className="flex items-center justify-between">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${item.price}
            </p>
            <Image src={cartall} alt="cart" className="w-11 h-11" />
          </div>
      
          

               
              </div>
              </Link>
            </div>
            
          );
        })}
      </div>

      <div className="bg-[#E1E3E5] py-16 mt-16 text-center">
        <p className="text-4xl font-normal mb-4">Or subscribe to the newsletter</p>
        <div className="flex justify-center items-center gap-4">
          <input type="email" placeholder="Your email" className="h-[43px] border-b w-[550px] px-4" />
          <button className="w-[100px] h-[46px] rounded-[8px] bg-black text-white">Subscribe</button>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="bg-white py-12 mt-12 text-center">
        <h2 className="text-4xl font-normal mb-6">Follow products and discounts on Instagram</h2>
        <div className="flex justify-center gap-6">
          <div className="w-[186px] h-[186px]">
            <Image src="/.cata2" alt="Instagram Post" width={186} height={186} className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src="/chair5" alt="chair 5" width={186} height={186} className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src="/chair2" alt="chair 2" width={186} height={186} className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src="/chair1" alt="chair 1" width={186} height={186} className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src="/chair3" alt="chair 3" width={186} height={186} className="object-cover" />
          </div>
          <div className="w-[186px] h-[186px]">
            <Image src="/.newchair" alt="new chair" width={186} height={186} className="object-cover" />
          </div>
          </div>
          </div>
    </div>
  );
};

export default Productlist;
