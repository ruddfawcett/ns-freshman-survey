$(function () {
  // exeter athletic
  $('#perceptions .andover.other-perception-athletic').highcharts({
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
      text: 'Perception of students at Exeter is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        // data: [25, 95, 49]
        data: [14.79, 56.21, 28.99],
        showInLegend: false
      }
    ]
  });
});
