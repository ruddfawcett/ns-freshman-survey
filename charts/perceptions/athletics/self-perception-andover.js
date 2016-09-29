$(function () {
  // andover athletic
  $('#comparisons .chart.self-perception-athletics-andover').highcharts({
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
        data: [75, 92, 2]
        // data: [43.38, 54.44, 1.18]
      }
    ]
  });
});
