import Banner from "@/core/component/banner/banner";
import Menus from "@/core/component/menu/menus";
import TimeLine from "@/core/component/timeline/timeline";
import Top from "@/core/component/top/top";
import menu from "@/core/data/menu.data.json"
import timeline from "@/core/data/timeline.data.json";
export default function Home_Page() {
  return (
    <div>
      <Top version={"v1"}/>
      <Banner image={"t1"}/>
      <Banner image={"t2"}/>
      <div className="container-data">
        <Menus menusData={menu}/>
        <TimeLine timelineData={timeline} />
      </div>
    </div>
  );
}
