import Image from "next/image"
export default function Banner2() {
  return (
    <div className="w-full aspect-[16/4] relative">
      <Image src={"https://yatra.brajesh.info/wp-content/uploads/2025/05/map.jpg"} alt={""} fill={true}></Image>
    </div>
  )
}