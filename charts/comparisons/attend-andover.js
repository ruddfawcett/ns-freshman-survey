$(function () {
  $('#comparisons .andover.attend').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Yes',
        'No',
        'Not applicable'
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
      text: 'Would you have attended Exeter if admitted?'
    },
    series: [{
      // data: [73, 84]
      data: [3.55, 40.83, 55.62],
      showInLegend: false
    }]
  });
});
