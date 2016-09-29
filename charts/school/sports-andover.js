$(function () {
  $('#middle-school .chart.sports-andover').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Yes, at varsity level',
        'Yes, at junior varsity level',
        'Yes, at intramural/introductory level',
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
        data: [65, 61, 40, 3]
      }
    ]
  });
});
