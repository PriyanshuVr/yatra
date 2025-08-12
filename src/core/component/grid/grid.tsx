import Image from "next/image";
import React from "react";
export default function Grid({gridData}: gridProps) {
  return(
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {gridData.map((item:gridDataProps, index:number) => (
        <React.Fragment key={index}>
          <div>
            <Image
              className="w-full"
              src={item.Image}
              alt={""}
              width={490}
              height={490}
            ></Image>
            {item.Text &&
              <div className="text-center bg-[#ff6201] text-white">
              {item.Text}
              </div>
            }
          </div>
        </React.Fragment>
      ))} 
      </div>
  )
}