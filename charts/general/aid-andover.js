$(function () {
  $('#general .andover.aid').highcharts({
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
    title: {
      text: 'Are you on any form of financial aid?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [46.75, 53.25],
      showInLegend: false
    }]
  });
});
