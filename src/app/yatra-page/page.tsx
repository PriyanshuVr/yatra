import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top";
import Topic from "@/core/component/topic";
import data from "@/core/data/yatra_data.json";
export default function Yatra_Page() {
  return (
    <div>
      <Top hex_code={"#fff0e3"}/>
      <Topic title={"Sanatan Yatra"}/>
      <Grid gridData={data}/>
    </div>
  )
}