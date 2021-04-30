import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_venn from "@amcharts/amcharts4/plugins/venn";
import "../App.css";

const VennDiagram = props => {
  const vennDiagram = useRef(null);
  useEffect(() => {
    // create venn diagram chart instance
    let chart = am4core.create("chartdiv", am4plugins_venn.VennDiagram);

    // create and configure series
    let series = chart.series.push(new am4plugins_venn.VennSeries());
    series.dataFields.category = "name";
    series.dataFields.value = "value";
    series.dataFields.intersections = "sets";
    series.data = [
      { name: "A", value: 10 },
      { name: "B", value: 10 },
      { name: "C", value: 3, set: ["A", "B"] }
    ];

    vennDiagram.current = chart;
    return () => {
      chart.dispose();
    };
  },[]);
  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default VennDiagram;
