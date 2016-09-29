$(function () {
  $('#middle-school .chart.preparation-exeter').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Prepared',
        'Neutral',
        'Unprepared'
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
        data: [84, 66, 7]
      }
    ]
  });
});
