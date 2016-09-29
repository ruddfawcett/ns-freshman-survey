$(function () {
  $('#middle-school .chart.type-exeter').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Public',
        'Private',
        'Homeschool'
      ],
      labels: {
        rotation: -90,
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        data: [109, 40, 0]
      }
    ]
  });
});
