import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import styles from "../../../src/modules/index/moai-token/chart.module.scss";

import { useLayoutEffect, useRef } from "react";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

interface Props {
  dataMoaiToken: any;
}

export function ChartMobile({ dataMoaiToken }: Props) {
  const chart = useRef<any>(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.PieChart);

    x.paddingRight = 20;

    x.data = dataMoaiToken;
    var pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.labels.template.wrap = true;
    pieSeries.labels.template.fontSize = 11;
    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.html =
      "<div class='label-wrapper text-white max-w-[120px] text-center flex leading-5 flex-colrounded-[8px] p-[8px]'>{category}</div>";
    pieSeries.labels.template.radius = am4core.percent(-78);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.labels.template.relativeRotation = 90;

    pieSeries.hiddenState.properties.endAngle = -90;

    (x as any)?._logo?.dispose();

    pieSeries.labels.template.adapter.add("fill", function (color, target) {
      console.log(target.dataItem);
      if (target.dataItem && target.dataItem.values.value.percent < 11) {
        return am4core.color("#000");
      }
      return color;
    });
    pieSeries.slices.template.propertyFields.fill = "color";
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div
      className={styles.chart}
      id="chartdiv"
      style={{ width: "100%", height: "100%", minHeight: "400px" }}
    >
      {" "}
    </div>
  );
}
