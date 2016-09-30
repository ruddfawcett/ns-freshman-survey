$(function () {
  // andover athletic
  $('#perceptions .andover.self-perception-athletic').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
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
      text: 'Perception of students at Andover is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        // data: [75, 92, 2]
        data: [43.38, 54.44, 1.18],
        showInLegend: false
      }
    ]
  });
});
