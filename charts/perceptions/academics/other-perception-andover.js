$(function () {
  // exeter acadmic
  $('#perceptions .andover.other-perception-academic').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very<br />academically-oriented',
        'Somewhat<br />academically-oriented',
        'Not very<br />academically-oriented'
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
        // data: [125, 36, 8]
        data: [73.96, 21.30, 4.73],
        showInLegend: false
      }
    ]
  });
});
