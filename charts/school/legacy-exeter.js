$(function () {
  $('#school .exeter.legacy').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
      text: 'Did you visit Andover before applying?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [33.56, 66.44],
      showInLegend: false
    }]
  });
});
