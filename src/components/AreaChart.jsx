import React from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    type: 'area',
    height: 300,
    width: 500,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1050,
        options: {
          width: 900,
        },
      },
    ],
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
      <ReactApexChart options={options} series={options.series} type='area' />
    </div>
  );
}

export default AreaChart;
