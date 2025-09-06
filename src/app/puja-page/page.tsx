"use client"

import Grid from "@/core/component/grid/grid";
import Top from "@/core/component/top/top";
import Topic from "@/core/component/topic/topic";
import puja from "@/core/data/puja.data.json";
import { motion } from "motion/react";
export default function Puja_Page() {
  return(
    <div>
      <motion.div
        initial = {{ opacity: 0}}
        animate = {{ opacity: 1}}
        exit = {{ opacity: 0}}
        transition={{ duration: 1.3}} 
      > 
      <Top version={"v2"}/>
      <div className="container-data">
        <Topic title={"Puja"}/>
        <Grid gridData={puja}/>
      </div>
      </motion.div>
    </div>
  )
}