import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top/top";
import Topic from "@/core/component/topic/topic";
import data from "@/core/data/yatra.data.json";
export default function Yatra_Page() {
  return (
    <div>
      <Top version={"v2"}/>
      <div className="container-data">
        <Topic title={"Sanatan Yatra"}/>
        <Grid gridData={data}/>
      </div>
    </div>
  )
}