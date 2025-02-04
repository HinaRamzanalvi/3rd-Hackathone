

import Image from "next/image"
import back from "@/components/public/back2.png"

  export default function Hero(){
    return(
      <div>
             <div className="w-full h-auto">
      <Image 
        src={back} 
        alt="bannerpicture"  
        width={1400} 
        height={600} 
        className="object-cover"
      />
    </div>
      </div>
    )
  }

