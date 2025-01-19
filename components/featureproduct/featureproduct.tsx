import Image from "next/image";
import chair1 from "@/components/public/chair1.svg";
import chair2 from "@/components/public/chair2.svg";
import chair3 from "@/components/public/chair3.svg";
import chair4 from "@/components/public/chair4.svg";
import newicon from "@/components/public/new.svg";
import sale from "@/components/public/sale.svg";
import cart1 from "@/components/public/cart1.svg";
import cartall from "@/components/public/cartall.svg";











export default function Feature() {
  return (
    <div>
     
<div className="max-w-screen-xl mx-auto px-4 mt-12">
  {/* Section Header */}
  <h1 className="text-2xl md:text-3xl font-bold text-[#272343] text-center mb-8">
    Featured Products
  </h1>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Product 1 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={newicon} alt="icon" className="absolute top-2 left-2 w-10 h-10" />
      <Image src={chair1} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base text-[#007580]">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cart1} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 2 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={sale} alt="sale" className="absolute top-2 left-2 w-10 h-10" />
      <Image src={chair2} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <div className="flex items-center">
          <p className="text-lg text-[#272343]">$20</p>
          <p className="line-through text-[#9A9CAA] ml-3">$39</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 3 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={chair3} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>

    {/* Product 4 */}
    <div className="relative bg-white shadow-lg rounded-md overflow-hidden">
      <Image src={chair4} alt="chair" className="w-full h-auto" />
      <div className="p-4">
        <p className="font-bold text-sm md:text-base">Library Stool Chair</p>
        <p className="text-lg text-[#272343]">$20</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <Image src={cartall} alt="cart" className="w-6 h-6" />
      </div>
    </div>
  </div>
</div>










      









     


    </div>

  )
}