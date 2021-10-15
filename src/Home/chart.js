const options = (xAxis, yAxis) => ({
  series: [...yAxis],
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [4, 4]
  },
  title: {
    text: ''
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: [...xAxis],
  // labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'date'
  },
  yaxis: yAxis.map((value, i) => ({
    opposite: i===1,
    title: {
      text: value.name,
    }
  }))
  }
);

export default options;

/**
 * {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#eb6d4d", "#247BA0"],
  series: [
    ...yAxis
  ],
  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: xAxis
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          colors: "#FF1654"
        }
      },
      title: {
        text: yAxis.name,
        style: {
          color: "#FF1654"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
}
 */