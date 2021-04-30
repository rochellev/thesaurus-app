import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_venn from "@amcharts/amcharts4/plugins/venn";
import "../App.css";

const VennDiagram = props => {
  let chart = am4core.create("chartdiv", am4plugins_venn.VennDiagram);
  let series = chart.series.push(new am4plugins_venn.VennSeries());

  

};

export default VennDiagram;