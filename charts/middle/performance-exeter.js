$(function () {
  $('#middle-school .exeter.performance').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
      data: [81.21,16.11, 1.34, 1.34,0,],
      showInLegend: false
    }]
  });
});
