import React from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    type: 'area',
    height: 300,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: 'Time',
      color: '#ffb500',
      data: [2.9, 2.8, 3, 3.1, 4, 3.9, 3.8],
    },
  ],
  stroke: {
    curve: 'smooth',
  },
  responsive:[{
    breakpoint: 1024,
    options:{
      width: 400,
      height: 300,
    },
  }],
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  xaxis: {
    type: 'ddd',
    lines: {
      show: false,
    },
  },
  yaxis: {
    type: 'h',
    decimalsInFloat: 1,
    forceNiceScale: true,
    min: 1,
    max: 5,
    lines: {
      show: false,
    },
  },
};

function AreaChart() {
  return (
    <div>
      <ReactApexChart options={options} series={options.series} type='area' height={options.chart.height}/>
    </div>
  );
}

export default AreaChart;
