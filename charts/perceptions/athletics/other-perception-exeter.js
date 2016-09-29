$(function () {
  // andover athletic
  $('#comparisons .chart.other-perception-athletics-exeter').highcharts({
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
        data: [50, 86, 21]
        // data: [31.85, 54.78, 13.38]
      }
    ]
  });
});
