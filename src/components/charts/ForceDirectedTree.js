import React, { useRef, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "../App.css";

am4core.useTheme(am4themes_animated);
const ForceDirectedTree = () => {
  const chart = useRef(null);

  useEffect(() => {
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
    series.data = [
      {
        name: "First",
        children: [
          {
            name: "A1",
            value: 100
          },
          {
            name: "A2",
            value: 60
          },
          {
            name: "A3",
            value: 30
          }
        ]
      },
      {
        name: "Second",
        children: [
          {
            name: "B1",
            value: 135
          },
          {
            name: "B2",
            value: 98
          },
          {
            name: "B3",
            value: 56
          }
        ]
      },
      {
        name: "Third",
        children: [
          {
            name: "C1",
            value: 335
          },
          {
            name: "C2",
            value: 148
          },
          {
            name: "C3",
            value: 126
          },
          {
            name: "C4",
            value: 26
          }
        ]
      },
      {
        name: "Fourth",
        children: [
          {
            name: "D1",
            value: 415
          },
          {
            name: "D2",
            value: 148
          },
          {
            name: "D3",
            value: 89
          },
          {
            name: "D4",
            value: 64
          },
          {
            name: "D5",
            value: 16
          }
        ]
      },
      {
        name: "Fifth",
        children: [
          {
            name: "E1",
            value: 687
          },
          {
            name: "E2",
            value: 148
          }
        ]
      }
    ];

    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";

    // Add labels
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = 15;
    series.maxRadius = 40;

    // set current, not sure if needed
    chart.current = x;
    return () => {
      x.dispose();
    };
  });

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>;
};

export default ForceDirectedTree;
