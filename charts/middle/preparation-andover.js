$(function () {
  $('#middle-school .andover.preparation').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Prepared',
        'Neutral',
        'Unprepared'
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
      text: 'How prepared do you feel you are for Andover?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [35.5, 58.58, 5.92],
      showInLegend: false
    }]
  });
});
