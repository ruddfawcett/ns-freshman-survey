$(function () {
  $('#middle-school .andover.performance').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Very Good',
        'Good',
        'Neutral',
        'Poor',
        'Very Poor'
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
      text: 'How would you define your academic performance in middle school?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [83.43, 16.57, 0,0,0,],
      showInLegend: false
    }]
  });
});
