$(function () {
  $('#middle-school .exeter.first').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Yes',
        'No'
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
        data: [70, 87]
      }
    ]
  });
});
