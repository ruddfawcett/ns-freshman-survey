$(function () {
  // andover social
  $('#comparisons .chart.other-perception-social-exeter').highcharts({
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
        data: [58, 80, 19]
        // data: [36.94, 50.96, 12.1]
      }
    ]
  });
});
