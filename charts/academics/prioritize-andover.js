$(function () {
  $('#academics .andover.prioritize').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Academics',
        'Athletics',
        'Extracurriculars',
        'Family',
        'Social life',
        'Faith or religion'
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
      text: 'What do you prioritize most in your life right now?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [65.68, 2.37, 5.33, 14.79, 10.65, 1.18],
      showInLegend: false
    }]
  });
});
