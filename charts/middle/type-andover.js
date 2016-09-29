$(function () {
  $('#middle-school .andover.type').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Public',
        'Private',
        'Homeschool'
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
      text: 'What type of middle school did you graduate from?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      // data: [72, 85]
      data: [43.20, 56.80, 0],
      showInLegend: false
    }]
  });
});
