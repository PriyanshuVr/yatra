import Image from "next/image"
import React from "react"
import {data} from "@/core/data/menu_data"
import Link from "next/link"
export default function Menus() {
  return(
    <div className="max-w-7xl mx-20 lg:mx-auto my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, index)=>(
            <React.Fragment key={index}>
              <div className="relative">
                <Link href={item.LinkHref}>
                <Image src={item.Image} alt={""} width={300} height={300}></Image>
                <p className="absolute w-full text-center bottom-1.5 text-white">{item.Text}</p>
                </Link>
              </div>
              </React.Fragment>
              ))}
        </div>
    
      </div>
  )
}