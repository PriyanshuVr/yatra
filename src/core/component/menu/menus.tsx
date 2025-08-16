import Image from "next/image"
import React from "react"
import Link from "next/link"
export default function Menus({menusData}: menusProps) {
  return(
    <div className="max-w-7xl mx-20 lg:mx-auto my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {menusData.map((item, index)=>(
            <React.Fragment key={index}>
              <div className="relative">
                <Link href={item.LinkHref}>
                <Image className="w-full" src={item.Image} alt={""} width={300} height={300}></Image>
                <p className="absolute w-full text-center bottom-0 text-white text-[10px] md:text-[12px] lg:text-[16px]">{item.Text}</p>
                </Link>
              </div>
              </React.Fragment>
              ))}
        </div>
    
      </div>
  )
}