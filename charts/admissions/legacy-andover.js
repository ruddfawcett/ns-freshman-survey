$(function () {
  // Did you apply to Exeter?
  $('#admissions .andover.legacy').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Yes',
        'No'
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
      formatter: columnToolTipFormatter
    },
    title: {
      text: 'Did your parents, grandparents, or other immediate family attend Andover?'
    },
    series: [{
      // data: [86, 83],
      data: [31.36, 68.64],
      showInLegend: false
    }]
  });
});
