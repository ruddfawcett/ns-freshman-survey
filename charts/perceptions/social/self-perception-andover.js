$(function () {
  // andover social
  $('#perceptions .andover.self-perception-social').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very<br />socially-oriented',
        'Somewhat<br />socially-oriented',
        'Not very<br />socially-oriented'
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
        // data: [124, 44, 1]
        data: [73.37, 26.04, 0.59],
        showInLegend: false
      }
    ]
  });
});
