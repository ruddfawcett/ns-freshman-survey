$(function () {
  // exeter social
  $('#comparisons .chart.self-perception-social-exeter').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very socially-oriented',
        'Somewhat socially-oriented',
        'Not very socially-oriented'
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
        data: [98, 58, 1]
        // data: [62.42, 36.94, 0.64]
      }
    ]
  });
});
