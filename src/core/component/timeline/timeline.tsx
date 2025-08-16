import Image from "next/image";
import React from "react";
import Topic from "../topic/topic";
import Link from "next/link";
export default function TimeLine({timelineData}: timelineProps) {
  return (
    <>
      <Topic title={"Sanatan sahitya, mantra, stories"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-x-20">
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            {index % 2 == 0 ? (
              <>
                <div className="col-span-1">
                  <Link href={item.Url} className="inline-block w-full mt-5">
                    <Image
                      className="w-full"
                      src={item.Image}
                      alt={""}
                      width={490}
                      height={490}
                    ></Image>
                  </Link>
                </div>
                <div className="col-span-1 border-red-800 border-b-2 pb-8 lg:border-b-0">
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
                  <div className="text-[32px] font-semibold text-red-800 mb-5">
                    {item.Heading}
                  </div>
                  <p className="text-black text-justify leading-relaxed">
                    {item.Details}
                  </p>
                </div>
                <div className="col-span-1">
                  <Link href={"#"} className="inline-block w-full mt-5">
                    <Image
                      className="w-full border-red-800 border-b-2 pb-8 lg:border-b-0 lg:pb-0"
                      src={item.Image}
                      alt={""}
                      width={490}
                      height={490}
                    ></Image>
                  </Link>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div></div>
    </>
  );
}
