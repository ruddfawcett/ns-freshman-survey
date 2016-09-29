$(function () {
  $('#general .andover.home').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'United States - Northeast',
        'United States - Midwest',
        'United States - West',
        'United States - Southwest',
        'United States - Southeast',
        'United States - Discontiguous',
        'Outside of United States'
      ]
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    title: {
      text: 'Where are you from?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
        data: [63.91, 5.92, 10.06, 5.92, 7.69, 0, 6.51],
        showInLegend: false
      }
    ]
  });
});
