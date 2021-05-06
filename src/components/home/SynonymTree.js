import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../App.css";

am4core.useTheme(am4themes_animated);

const SynonymTree = seriesData => {
  const chart = useRef(null);
  useEffect(() => {
    // console.log(`seriesData: ${JSON.stringify(seriesData, null, 2)}`);
    // Create chart
    var x = am4core.create(
      "chartdiv",
      am4plugins_forceDirected.ForceDirectedTree
    );

    // Create series
    var series = x.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    // Set data
    series.data = seriesData.seriesData;
    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.maxLevels = 2;

    // Add labels
    series.nodes.template.label.text = "{name}";
    series.fontSize = 18;
    series.minRadius = 65;
    series.maxRadius = 100;

    // format nodes
    series.nodes.template.outerCircle.filters.push(
      new am4core.DropShadowFilter()
    );
    // set current, not sure if needed
    chart.current = x;
    return () => {
      x.dispose();
    };
  }, [seriesData]);
  return <div id="chartdiv" style={{ width: "100%", height: "800px" }}></div>;
};

export default SynonymTree;
