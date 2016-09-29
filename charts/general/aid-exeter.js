$(function () {
  $('#general .exeter.aid').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
      data: [46.31, 53.69],
      showInLegend: false
    }]
  });
});
