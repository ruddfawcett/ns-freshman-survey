$(function () {
  // exeter social
  $('#comparisons .chart.other-perception-social-andover').highcharts({
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
        data: [13, 87, 69]
        // data: [7.69, 51.48, 40.83]
      }
    ]
  });
});
