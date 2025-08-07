import Image from "next/image"
type TopProps = {
  hex_code: string;
};
export default function Top({hex_code}: TopProps) {
  return (
    <div className="w-full relative flex items-center justify-center" style={{backgroundColor: hex_code}}>
            <a href="#" className="m-1.5">
              <Image src={"https://yatra.brajesh.info/wp-content/uploads/2025/05/logo_yatra.png"} alt={""} width={80} height={80}></Image>
            </a>
    </div>
  )
}