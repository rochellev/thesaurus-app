import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../App.css";

am4core.useTheme(am4themes_animated);

const SynonymTree = () => {
  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
}

export default SynonymTree;