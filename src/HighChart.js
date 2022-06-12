import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import highchartsGantt from "highcharts/modules/gantt";
import HighchartsReact from "highcharts-react-official";

// init the module
highchartsGantt(Highcharts);

const lastValue = 0;
const options = {
  chart: {
    spacingRight: 20,
    // events: {
    //   load: function () {
    //     var chart = this;
    //     var series = {
    //       color: "green",
    //       //   type: "tyt",
    //       showInLegend: false,
    //       enableMouseTracking: false,
    //       zIndex: -1,
    //       dataLabels: {
    //         enabled: false,
    //       },
    //       data: (function () {
    //         var data = [];
    //         chart.series[0].data.forEach(function () {
    //           data.push(chart.yAxis[0].max);
    //         });
    //         return data;
    //       })(),
    //     };

    //     chart.myCustomTexts = [];
    //     chart.addSeries(series);

    //     series.data = (function () {
    //       var data = [];
    //       chart.series[0].data.forEach(function () {
    //         data.push(chart.yAxis[1].max);
    //       });
    //       return data;
    //     })();

    //     chart.addSeries(series);

    //     var chart = this;
    //     setTimeout(function () {
    //       Highcharts.each(chart.series, function (s) {
    //         var lastPoint = s.points[s.points.length - 1];
    //         lastPoint.update({
    //           marker: {
    //             enabled: true,
    //           },
    //         });
    //         lastValue = lastPoint.y;
    //         document.querySelector(".caption").innerHTML =
    //           Math.round(lastValue) + "%";
    //       });
    //     }, 1);
    //   },
    // },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: "",
  },
  plotOptions: {
    series: {
      color: "darkgreen",
      dataLabels: {
        enabled: false,
      },
      point: {
        // events: {
        //   mouseOver: function () {
        //     document.querySelector(".caption").innerHTML =
        //       Math.round(this.y) + "%";
        //   },
        // },
      },
      events: {
        // mouseOut: function () {
        //   document.querySelector(".caption").innerHTML =
        //     Math.round(lastValue) + "%";
        // },
      },
    },
    bar: {
      grouping: false,
      states: {
        inactive: {
          opacity: 1,
        },
      },
    },
  },
  yAxis: {
    min: 90,
    max: 110,
    tickInterval: 5,
    gridLineWidth: 2,
    gridZIndex: 10,
    title: {
      text: "",
    },
  },
  xAxis: {
    visible: false,
  },
  series: [
    {
      type: "bar",
      data: [101.5],
    },
  ],
};

export default function HighChart() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
