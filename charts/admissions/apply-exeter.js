$(function () {
  // Did you apply to Andover?
  $('#admissions .exeter.apply').highcharts({
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
    tooltip: {
      formatter: columnToolTipFormatter
    },
    title: {
      text: 'Did you apply to Andover?'
    },
    series: [{
      // data: [73, 84]
      data: [46.31, 53.69],
      showInLegend: false
    }]
  });
});
