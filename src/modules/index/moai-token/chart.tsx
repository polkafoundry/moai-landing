import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import styles from './chart.module.scss';

import { useLayoutEffect, useRef } from "react";
import { useScreenActive } from "../ctx";
import { HomeSection } from "../const";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

export function Chart() {
  const chart = useRef<any>(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.PieChart);

    x.paddingRight = 20;

    let data = [
      {
        "country": "ECOSYSTEM GROWTH",
        "litres": 50,
        color: '#ff1100',
      },
      {
        "country": "TREASURY",
        "litres": 3,
        color: '#ff5b00',
      },
      {
        "country": "PUBLIC SALE",
        "litres": 7,
        color: '#ff9404',
      },
      {
        "country": "LIQUIDTY & LISTING",
        "litres": 10,
        color: '#fccc06',
      },
      {
        "country": "MARKETING",
        "litres": 10,
        color: '#f7ff04',
      },
      {
        "country": "ANGLE SALE",
        "litres": 10,
        color: '#a7d90d',
      },
      {
        "country": "TEAM",
        "litres": 10,
        color: '#08cc15',
      },
    ];

    x.data = data;
    // let visits = 10;

    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    // }

    // x.data = data;

    // let dateAxis = x.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;

    // let valueAxis: any = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = x.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";
    // series.tooltipText = "{valueY.value}";
    // x.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // x.scrollbarX = scrollbarX;

    // chart.current = x;


    var pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = "color";
    // pieSeries.radius = 200;

    // pieSeries.labels.template.htmlContainer = <div></div>
    // pieSeries.labels.template.html = "<div class='label-wrapper text-white flex leading-5 flex-col border border-white rounded-[8px] p-[8px]'><div class='label'>{category}</div><div>{value.value}</div></div>";
    // // pieSeries.labels.template.text = ''
    // // pieSeries.labels.template.maxWidth = 200;
    // pieSeries.labels.template.wrap = true;
    // pieSeries.labels.template.fontSize = 16;

    // pieSeries.labels.template.padding(12, 0, 0, 0);
    // pieSeries.ticks.template.fill = am4core.color("#fff");
    
    pieSeries.hiddenState.properties.endAngle = -90;

    (x as any)?._logo?.dispose();
    // https://www.amcharts.com/docs/v4/tutorials/one-pulled-slice-per-pie-chart/
    pieSeries.slices.template.events.on("hit", function(ev: any) {
      let series = ev.target.dataItem.component;
      series.slices.each(function(item: any) {
        
        item.isActive = false;
      })
    });
    // let gradient = new am4core.LinearGradient();gradient.addColor(am4core.color("red"));
    // gradient.addColor(am4core.color("#FF1100"));
    // gradient.addColor(am4core.color("#FC7B03"));
    // pieSeries.labels.template.fill = gradient;//am4core.color("white");
    

    // pieSeries.slices.template.cornerRadius = 12;
    // pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    // pieSeries.slices.template.strokeWidth = 2;
    // pieSeries.slices.template.strokeOpacity = 1;
    // var label = x.createChild(am4core.Label);
    // label.text = "Hello world!";
    // label.fontSize = 20;
    // label.align = "center";
    // label.isMeasured = false;
    // label.x = 70;
    // label.y = 20;
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div className={styles.chart} id="chartdiv" style={{ width: "100%", height: '100%', minHeight:'400px' }}> </div>
  );
}