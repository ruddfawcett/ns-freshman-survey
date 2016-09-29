$(function () {
  $('#middle-school .chart.preparation-andover').highcharts({
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
    series: [{
      data: [35.5, 58.58, 5.92]
    }]
  });
});
