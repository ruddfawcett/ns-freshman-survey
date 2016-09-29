$(function () {
  // exeter athletic
  $('#comparisons .chart.other-perception-athletics-andover').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very athletically-oriented',
        'Somewhat athletically-oriented',
        'Not very athletically-oriented'
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
        data: [25, 95, 49]
        // data: [14.79, 56.21, 28.99]
      }
    ]
  });
});
