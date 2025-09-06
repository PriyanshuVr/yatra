"use client";

import Banner from "@/core/component/banner/banner";
import Menus from "@/core/component/menu/menus";
import TimeLine from "@/core/component/timeline/timeline";
import Top from "@/core/component/top/top";
import menu from "@/core/data/menu.data.json"
import timeline from "@/core/data/timeline.data.json";
import { motion } from "motion/react";

export default function Home_Page() {
  return (
    <div>
      <motion.div
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1}}
        exit = {{ opacity: 0}}
        transition={{ duration: 1.3}} 
      >
      <Top version={"v1"}/>
      <Banner image={"t1"}/>
      <Banner image={"t2"}/>
      <div className="container-data">
        <Menus menusData={menu}/>
        <TimeLine timelineData={timeline}/>
      </div>
      </motion.div>
    </div>
  );
}
