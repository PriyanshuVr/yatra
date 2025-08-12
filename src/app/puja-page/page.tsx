import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top/top";
import Topic from "@/core/component/topic/topic";
import puja from "@/core/data/puja.data.json";

export default function Puja_Page() {
  return(
    <div>
      <Top version={"v2"}/>
      <div className="container-data">
        <Topic title={"Puja"}/>
        <Grid gridData={puja}/>
      </div>
    </div>
  )
}