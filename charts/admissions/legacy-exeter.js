$(function () {
  $('#admissions .exeter.legacy').highcharts({
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
      text: 'Did your parents, grandparents, or other immediate family attend Andover?'
    },
    series: [{
      // data: [86, 83],
      data: [33.56, 66.44],
      showInLegend: false
    }]
  });
});
