$(function () {
  // exeter acadmic
  $('#comparisons .chart.other-perception-academic-andover').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very academically-oriented',
        'Somewhat academically-oriented',
        'Not very academically-oriented'
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
        // data: [125, 36, 8]
        showInLegend: false,
        data: [73.96, 21.30, 4.73]
      }
    ]
  });
});
