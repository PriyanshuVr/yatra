import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top/top";
import Topic from "@/core/component/topic/topic";
import wallpaper from "@/core/data/wallpaper.data.json";

export default function Wallpaper_page() {
    return(
        <div>
            <Top version={"v2"}/>
            <div className="container-data">
                <Topic title={"वॉलपेपर"}/>
                <Grid gridData={wallpaper}/>
            </div>
        </div>
    )
}