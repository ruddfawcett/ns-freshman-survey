$(function () {
  // andover acadmic
  $('#perceptions .andover.self-perception-academic').highcharts({
    //   colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    colors: ['#082B55', '#178DE7','#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Very academically-oriented',
        'Somewhat academically-oriented',
        'Not very academically-oriented'
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
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [66.27, 33.14, 0.59],
      showInLegend: false,
      // data: [112, 56, 1]
    }]
  });
});
