import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../App.css";
import { useSelector } from "react-redux";

am4core.useTheme(am4themes_animated);

export const SynonymTree = () => {
  const chart = useRef(null);

  const treeData = useSelector(state => state.synonyms.treeData);
  const hardData = useSelector(state => state.hardChart);

  useEffect(() => {
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
        x.zoomToDataItem(event.target.dataItem, 1, true);
      } else {
        x.zoomOut();
      }
    });

    // Create a container
    // var container = am4core.create("container", am4core.Container);
    // container.width = am4core.percent(100);
    // container.height = am4core.percent(50);
    // container.layout = "vertical";

    // Set data
    series.data = [hardData];
    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";
    series.dataFields.fixed = "fixed";
    series.nodes.template.propertyFields.x = "x";
    series.nodes.template.propertyFields.y = "y";
    series.dataFields.collapsed = "off";

    // Format labels
    let labelTemplate = series.nodes.template.label;
    labelTemplate.text = "{name}";
    labelTemplate.wrap = true;
    labelTemplate.padding = 8;
    labelTemplate.fontSize = am4core.percent(150);

    // series.fontSize = 20;
    series.minRadius = am4core.percent(11);
    series.maxRadius = am4core.percent(9);
    series.maxLevels = 2;

    // format nodes
    series.nodes.template.outerCircle.filters.push(
      new am4core.DropShadowFilter()
    );
    chart.current = x;
    return () => {
      x.dispose();
    };
  }, [treeData]);
  return <div id="chartdiv" style={{ width: "100%", height: "1000px" }}></div>;
};
