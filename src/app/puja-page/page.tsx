import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top";
import Topic from "@/core/component/topic";
import {data} from "@/core/data/puja_data";

export default function Puja_Page() {
  return(
    <div>
      <Top hex_code={"#fff0e3"}/>
      <Topic title={"Puja New"}/>
      <Grid gridData={data}/>
    </div>
  )
}