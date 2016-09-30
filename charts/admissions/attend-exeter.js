$(function () {
  $('#admissions .exeter.attend').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
      text: 'Would you have attended Andover if admitted?'
    },
    series: [{
      // data: [73, 84]
      data: [4.7, 46.31, 48.99],
      showInLegend: false
    }]
  });
});
