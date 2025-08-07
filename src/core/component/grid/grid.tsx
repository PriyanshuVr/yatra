
import Image from "next/image";
import React from "react";
export default function Grid({gridData}: gridProps) {
  return(
    <div className="max-w-7xl mx-20 lg:mx-auto my-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {gridData.map((item:gridDataProps, index:number) => (
          <React.Fragment key={index}>
            <div>
              <Image
                className="w-full"
                src={item.Image || "https://yatra.brajesh.info/wp-content/uploads/2025/06/5.jpg"}
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
    </div>
  )
}