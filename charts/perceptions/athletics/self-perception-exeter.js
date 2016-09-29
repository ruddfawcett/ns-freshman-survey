$(function () {
  // exeter athletic
  $('#comparisons .chart.self-perception-athletics-exeter').highcharts({
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
        data: [63, 90, 4]
        // data: [40.13, 57.32, 2.55]
      }
    ]
  });
});
