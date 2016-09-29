$(function () {
  // Did you apply to Exeter?
  $('#comparisons .andover.apply').highcharts({
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
      text: 'Did you apply to Exeter?'
    },
    series: [{
      // data: [86, 83],
      data: [50.89, 49.11],
      showInLegend: false
    }]
  });
});
