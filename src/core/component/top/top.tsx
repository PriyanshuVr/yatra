import Image from "next/image"
export default function Top({version}: topProps) {
  const bgcolor = version === "v1" ? "bg-[#ff6201]" : version === "v2" ? "bg-[#fff0e3]" : "bg-white";
  return (
    <div className={`w-full relative flex items-center justify-center ${bgcolor}`}>
      <a href="#" className="m-1.5">
        <Image src={"https://yatra.brajesh.info/wp-content/uploads/2025/05/logo_yatra.png"} alt={""} width={80} height={80}></Image>
      </a>
    </div>
  )
}