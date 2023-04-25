import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FadeEffect } from "@/uikit/animation/fade-effect";
import styles from './chart.module.scss';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

export function Chart({ dataMoaiToken }: { dataMoaiToken: any }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  const chart = useRef<any>(null);

  useLayoutEffect(() => {
    let x = am4core.create("chartdiv", am4charts.PieChart);

    x.paddingRight = 20;

    let data = dataMoaiToken;

    x.data = data;

    var pieSeries = x.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.radius = 180;

    pieSeries.hiddenState.properties.endAngle = -90;

    (x as any)?._logo?.dispose();
    // https://www.amcharts.com/docs/v4/tutorials/one-pulled-slice-per-pie-chart/
    pieSeries.slices.template.events.on("hit", function (ev: any) {
      let series = ev.target.dataItem.component;
      series.slices.each(function (item: any) {

        item.isActive = false;
      })
    });

    // hide amchart label
    pieSeries.labels.template.text = "";
    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  return (
    <div className='relative'>
      <div className={clsx(styles.chart, 'pointer-events-none')} id="chartdiv" style={{ width: "100%", height: '100%', minHeight: '400px' }}> </div>

      <div className='absolute text-white top-0 right-0 bottom-0 left-0 flex justify-center items-center pointer-events-none -translate-x-[9px] -translate-y-[1px]'>
        <div className="relative w-[364px] h-[364px] border-[6px] border-white rounded-full">
          <div>
            <div className='absolute -right-[22px] top-[76px] h-[1px] w-[50px] bg-white -rotate-45' />
            <div className='absolute -right-[15px] top-[9px] h-[50px] w-[1px] bg-white' />

            <FadeEffect show={show} x={100}>
              <div className='absolute -right-[97px] -top-[48px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
                <div className='absolute -bottom-[4px] left-[calc(50%-4px)] w-[7px] h-[7px] rounded-full bg-white'></div>
                <div className='text-gradient font-[500]' style={{
                  ['--text-gradient-from' as string]: '#FF1100',
                  ['--text-gradient-to' as string]: '#FC7B03',
                }}>{dataMoaiToken[0].country}</div>
                <div>{dataMoaiToken[0].litres}%</div>
              </div>
            </FadeEffect>
          </div>

          <div>
            <div className='absolute right-[198px] -bottom-[14px] h-[1px] w-[36px] bg-white rotate-[65deg]' />
            <div className='absolute right-[68px] -bottom-[30px] h-[1px] w-[140px] bg-white' />
            <div className='absolute -right-[70px] -bottom-[58px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
              <div className='absolute bottom-[calc(50%-4px)] -left-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
              <div className='text-gradient font-[500]' style={{
                ['--text-gradient-from' as string]: '#FF9404',
                ['--text-gradient-to' as string]: '#FF5B00',
              }}>{dataMoaiToken[1].country}</div>
              <div>{dataMoaiToken[1].litres}%</div>
            </div>
          </div>

          <div>
            <div className='absolute left-[43px] bottom-[19px] h-[1px] w-[36px] bg-white -rotate-[55deg]' />
            <div className='absolute left-[50px] -bottom-[10px] h-[15px] w-[1px] bg-white' />
            <div className='absolute -left-[0px] -bottom-[68px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
              <div className='absolute left-[calc(50%-4px)] -top-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
              <div className='text-gradient font-[500]' style={{
                ['--text-gradient-from' as string]: '#FF5B00',
                ['--text-gradient-to' as string]: '#FC9803',
              }}>{dataMoaiToken[2].country}</div>
              <div>{dataMoaiToken[2].litres}%</div>
            </div>
          </div>

          <div>
            <div className='absolute left-[39px] bottom-[37px] h-[19px] w-[1px] bg-white rotate-[45deg]' />
            <div className='absolute left-[18px] bottom-[39px] h-[1px] w-[15px] bg-white' />

            <div className='absolute -left-[140px] bottom-[10px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
              <div className='absolute top-[calc(50%-4px)] -right-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
              <div className='text-gradient font-[500]' style={{
                ['--text-gradient-from' as string]: '#FF9404',
                ['--text-gradient-to' as string]: '#FF5B00',
              }}>{dataMoaiToken[3].country}</div>
              <div>{dataMoaiToken[3].litres}%</div>
            </div>
          </div>

          <div>
            <div className='absolute -left-[44px] bottom-[129px] h-[1px] w-[50px] bg-white' />
            <div className='absolute -left-[140px] bottom-[100px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
              <div className='absolute top-[calc(50%-4px)] -right-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
              <div className='text-gradient font-[500]' style={{
                ['--text-gradient-from' as string]: '#FCCC06',
                ['--text-gradient-to' as string]: '#FF5B00',
              }}>{dataMoaiToken[4].country}</div>
              <div>{dataMoaiToken[4].litres}%</div>
            </div>
          </div>

          <div>
            <div className='absolute -left-[30px] top-[108px] h-[1px] w-[42px] bg-white' />
            <FadeEffect show={show} x={-100}>
              <div className='absolute -left-[125px] top-[80px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col'>
                <div className='absolute top-[calc(50%-4px)] -right-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
                <div className='text-gradient font-[500]' style={{
                  ['--text-gradient-from' as string]: '#E7A016',
                  ['--text-gradient-to' as string]: '#FCF203',
                }}>{dataMoaiToken[5].country}</div>
                <div>{dataMoaiToken[5].litres}%</div>
              </div>
            </FadeEffect>
          </div>

          <div>
            <div className='absolute left-[49px] -top-[30px] h-[70px] w-[1px] -rotate-[45deg] bg-white' />
            <div className='absolute -left-[17px] -top-[20px] h-[1px] w-[42px] bg-white' />
            <FadeEffect show={show} x={-100}>
              <div className='absolute -left-[97px] -top-[48px] p-[8px] py-[4px] border border-white rounded-[8px] flex flex-col pr-8'>
                <div className='absolute top-[calc(50%-4px)] -right-[4px] w-[7px] h-[7px] rounded-full bg-white'></div>
                <div className='text-gradient font-[500]' style={{
                  ['--text-gradient-from' as string]: '#5BDD1D',
                  ['--text-gradient-to' as string]: '#BBFC03',
                }}>{dataMoaiToken[6].country}</div>
                <div>{dataMoaiToken[6].litres}%</div>
              </div>
            </FadeEffect>
          </div>
        </div>
      </div>
    </div>
  );
}