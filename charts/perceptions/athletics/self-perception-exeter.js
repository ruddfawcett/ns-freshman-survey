$(function () {
  // exeter athletic
  $('#perceptions .exeter.self-perception-athletic').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very<br />athletically-oriented',
        'Somewhat<br />athletically-oriented',
        'Not very<br />athletically-oriented'
      ],
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
      text: 'Perception of students at Exeter is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        // data: [63, 90, 4]
        data: [40.13, 57.32, 2.55],
        showInLegend: false
      }
    ]
  });
});
