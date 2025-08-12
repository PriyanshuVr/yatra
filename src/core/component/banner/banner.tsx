import Image from "next/image"
import data from "@/core/data/banner.data.json";

interface bannerProps {
  image: keyof typeof data
}
export default function Banner({image} : bannerProps) {
  const { image_url, ratio } = data[image];
  return (
    <div className={`w-full relative ${ratio}`}>
      <Image src={image_url} alt={""} fill={true}></Image>
    </div>
  )
}