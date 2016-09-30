$(function () {
  // andover acadmic
  $('#perceptions .andover.self-perception-academic').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    // colors: ['#082B55', '#178DE7','#ABDCFD'],
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
      text: 'Perception of students at Andover is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [66.27, 33.14, 0.59],
      showInLegend: false,
      // data: [112, 56, 1]
    }]
  });
});
