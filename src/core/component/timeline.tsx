import Image from "next/image";
import React from "react";
import {data} from "@/core/data/timeline_data";
import Topic from "./topic";
export default function TimeLine() {
  return (
    <div className="max-w-6xl mx-20 lg:mx-auto my-4">
      <Topic title={"Sanatan sahitya, mantra, stories"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-x-20">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {index % 2 == 0 ? (
              <>
                <div className="col-span-1">
                  <a href="#" className="inline-block w-full ">
                    <Image
                      className="w-full"
                      src={item.Image}
                      alt={""}
                      width={490}
                      height={490}
                    ></Image>
                  </a>
                </div>
                <div className="col-span-1 border-red-800 sm:border-b-3 sm:pb-8 lg:border-b-0">
                  <div className="text-[32px] font-semibold text-red-800 mb-6">
                    {item.Heading}
                  </div>
                  <p className="text-black text-justify leading-relaxed">
                    {item.Details}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="col-span-1 mt-4">
                  <div className="text-[32px] font-semibold text-red-800">
                    {item.Heading}
                  </div>
                  <p className="text-black text-justify leading-relaxed">
                    {item.Details}
                  </p>
                </div>
                <div className="col-span-1">
                  <a href="#" className="inline-block w-full">
                    <Image
                      className="w-full border-red-800 sm:border-b-3 sm:pb-8 lg:border-b-0 lg:pb-0"
                      src={item.Image}
                      alt={""}
                      width={490}
                      height={490}
                    ></Image>
                  </a>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div></div>
    </div>
  );
}
