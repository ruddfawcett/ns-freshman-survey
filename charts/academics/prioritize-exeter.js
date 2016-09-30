$(function () {
  $('#academics .exeter.prioritize').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
      data: [64.43, 4.70, 6.71, 12.75, 6.71, 4.70],
      showInLegend: false
    }]
  });
});
