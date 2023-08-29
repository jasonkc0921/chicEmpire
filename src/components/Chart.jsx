import React from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import styled from 'styled-components'

let Apex = {
  chart: {
    toolbar: {
      show: false
    }
  },
  tooltip: {
    shared: false
  },
  legend: {
    show: false
  }
};

var colors = [
  "#BFC9CA",
  "#AD1457",
  "#CC8E69",
  "#FF4560",
  "#775DD0",
  "#FFD700"
];

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var arrayData = [
  {
    y: 13,
    quarters: [
      {
        x: "2019",
        y: 30
      },
      {
        x: "2020",
        y: -5
      },
      {
        x: "2021",
        y: 54
      },
      {
        x: "2022",
        y: 40
      }
    ]
  },
  {
    y: 8.9,
    quarters: [
      {
        x: "2019",
        y: 0.5
      },
      {
        x: "2020",
        y: 9.7
      },
      {
        x: "2021",
        y: 34.3
      },
      {
        x: "2022",
        y: -6
      }
    ]
  },
  {
    y: 13.8,
    quarters: [
      {
        x: "2019",
        y: 11.6
      },
      {
        x: "2020",
        y: 40
      },
      {
        x: "2021",
        y: -8.9
      },
      {
        x: "2022",
        y: -2.3
      }
    ]
  },
  {
    y: 13.5,
    quarters: [
      {
        x: "2019",
        y: 30
      },
      {
        x: "2020",
        y: -5
      },
      {
        x: "2021",
        y: 54
      },
      {
        x: "2022",
        y: 40
      }
    ]
  },
  {
    y: 8.1,
    quarters: [
      {
        x: "2019",
        y: 120
      },
      {
        x: "2020",
        y: 120
      },
      {
        x: "2021",
        y: 130
      },
      {
        x: "2022",
        y: 170
      }
    ]
  },
  {
    y: 5.2,
    quarters: [
      {
        x: "2019",
        y: 11.6
      },
      {
        x: "2020",
        y: 40
      },
      {
        x: "2021",
        y: -8.9
      },
      {
        x: "2022",
        y: -2.3
      }
    ]
  }
];

function makeData() {
  var dataSet = arrayData;

  var dataYearSeries = [
    {
      x: "Watch",
      y: dataSet[0].y,
      color: colors[0],
      quarters: dataSet[0].quarters
    },
    {
      x: "Wine",
      y: dataSet[1].y,
      color: colors[1],
      quarters: dataSet[1].quarters
    },
    {
      x: "Whiskey",
      y: dataSet[2].y,
      color: colors[2],
      quarters: dataSet[2].quarters
    },
    {
      x: "Art",
      y: dataSet[3].y,
      color: colors[3],
      quarters: dataSet[3].quarters
    },
    {
      x: "S&P 500",
      y: dataSet[4].y,
      color: colors[4],
      quarters: dataSet[4].quarters
    },
    {
      x: "Gold",
      y: dataSet[5].y,
      color: colors[5],
      quarters: dataSet[5].quarters
    }
  ];

  return dataYearSeries;
}

function updateQuarterChart(sourceChart, destChartIDToUpdate) {
  var series = [];
  var seriesIndex = 0;
  var colors = [];

  if (sourceChart.w.globals.selectedDataPoints[0]) {
    var selectedPoints = sourceChart.w.globals.selectedDataPoints;
    for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
      var selectedIndex = selectedPoints[seriesIndex][i];
      var yearSeries = sourceChart.w.config.series[seriesIndex];

      series.push({
        name: yearSeries.data[selectedIndex].x,
        data: yearSeries.data[selectedIndex].quarters
      });
      colors.push(yearSeries.data[selectedIndex].color);
    }

    if (series.length === 0)
      series = [
        {
          data: []
        }
      ];
    console.log(series);
    return ApexCharts.exec(destChartIDToUpdate, "updateOptions", {
      series: series,
      colors: colors,
      fill: {
        colors: colors
      }
    });
  }
}

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: makeData()
        }
      ],
      options: {
        chart: {
          id: "barYear",
          height: 400,
          width: "100%",
          type: "bar",
          toolbar: {
            show: false
          },
          events: {
            dataPointSelection: function (e, chart, opts) {
              var quarterChartEl = document.querySelector("#chart-quarter");
              var yearChartEl = document.querySelector("#chart-year");

              if (opts.selectedDataPoints[0].length === 1) {
                if (quarterChartEl.classList.contains("active")) {
                  updateQuarterChart(chart, "barQuarter");
                } else {
                  yearChartEl.classList.add("chart-quarter-activated");
                  quarterChartEl.classList.add("active");
                  updateQuarterChart(chart, "barQuarter");
                }
              } else {
                updateQuarterChart(chart, "barQuarter");
              }

              if (opts.selectedDataPoints[0].length === 0) {
                yearChartEl.classList.remove("chart-quarter-activated");
                quarterChartEl.classList.remove("active");
              }
            },
            updated: function (chart) {
              updateQuarterChart(chart, "barQuarter");
            }
          }
        },
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: true,
            barHeight: "75%",
            dataLabels: {
              position: "bottom"
            }
          }
        },
        legend: {
          show: false
        },
        grid: {
          show: false
        },
        dataLabels: {
          enabled: true,
          textAnchor: "start",
          style: {
            colors: ["#fff"]
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex];
          },
          offsetX: 0,
          dropShadow: {
            enabled: true
          }
        },

        colors: colors,

        states: {
          normal: {
            filter: {
              type: "desaturate"
            }
          },
          active: {
            // allowMultipleDataPointsSelection: true,
            filter: {
              type: "darken",
              value: 1
            }
          }
        },
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              }
            }
          }
        },
        title: {
          text: "Average Return for the past 7 years",
          offsetX: 15
        },
        subtitle: {
          text: "(Hover on bar to see details)",
          offsetX: 15
        },
        yaxis: {
          labels: {
            show: false
          }
        }
      },

      seriesQuarter: [
        {
          data: []
        }
      ],
      optionsQuarter: {
        chart: {
          id: "barQuarter",
          height: 400,
          width: "100%",
          type: "bar",
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            horizontal: false
          }
        },
        legend: {
          show: false
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          },
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        // title: {
        //   text: "Quarterly Results",
        //   offsetX: 10
        // },
        tooltip: {
          x: {
            formatter: function (val, opts) {
              return opts.w.globals.seriesNames[opts.seriesIndex];
            }
          },
          y: {
            title: {
              formatter: function (val, opts) {
                return opts.w.globals.labels[opts.dataPointIndex];
              }
            }
          }
        }
      }
    };
  }

  changeData() {
    Apex.exec("barYear", "updateSeries", [
      {
        data: makeData()
      }
    ]);
  }

  render() {
    console.log(makeData());
    return (
      <ChartContainer>
      <div>
        <div id="wrap">
          <div id="chart-year">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={400}
            />
          </div>
          <p className="disclaimer">
            *** Return Of Watch Investment Is for the last 3 years
          </p>
          {/* <div id="chart-quarter">
            <Chart
              options={this.state.optionsQuarter}
              series={this.state.seriesQuarter}
              type="bar"
              height={400}
            />
          </div> */}
        </div>
        {/* <div id="html-dist"></div> */}
      </div>
      </ChartContainer>
    );
  }
}

export default BarChart;

const ChartContainer = styled.nav`

.disclaimer {
  text-transform: capitalize;
  font-weight: 500;
}

`