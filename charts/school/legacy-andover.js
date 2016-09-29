$(function () {
  $('#school .andover.legacy').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Yes',
        'No'
      ],
      labels: {
        rotation: -90,
      }
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
      text: 'Did you visit Exeter before applying?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [31.36, 68.64],
      showInLegend: false
    }]
  });
});
