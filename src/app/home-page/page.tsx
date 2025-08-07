import Banner1 from "@/core/component/banner1"
import Banner2 from "@/core/component/banner2"
import Menus from "@/core/component/menus"
import TimeLine from "@/core/component/timeline"
import Top from "@/core/component/top"

export default function MyFirstPage() {
  return (
    <div>
      <Top hex_code={"#ff6201"}/>
      <Banner1/>
      <Banner2/>
      <Menus/>
      <TimeLine/>
    </div>
  )
}