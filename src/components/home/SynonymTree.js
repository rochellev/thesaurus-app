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
    // make zoomable
    x.zoomable = true;

    // Create series
    var series = x.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    series.nodes.template.events.on("hit", function(event) {
      if (event.target.isActive) {
        x.zoomToDataItem(event.target.dataItem, 2, true);
      } else {
        x.zoomOut();
      }
    });

    // Set data
    series.data = seriesData.seriesData;
    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.maxLevels = 2;

    // Create a container
    // var container = am4core.create("container", am4core.Container);
    // container.width = am4core.percent(100);
    // container.height = am4core.percent(100);
    // container.layout = "vertical";

    // Format labels
    let labelTemplate = series.nodes.template.label;
    labelTemplate.text = "{name}";
    labelTemplate.wrap = true;
    labelTemplate.margin = 5;

    series.fontSize = 22;
    series.minRadius = 70;
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
  return <div id="chartdiv" style={{ width: "100%", height: "1000px" }}></div>;
};

export default SynonymTree;
