$(function () {
  // andover social
  $('#comparisons .chart.self-perception-social-andover').highcharts({
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
        data: [124, 44, 1]
        // data: [73.37, 26.04, 0.59]
      }
    ]
  });
});
