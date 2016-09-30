$(function () {
  // Did you get into Andover?
  $('#admissions .exeter.admitted').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Yes, admitted',
        'No, waitlisted',
        'No, rejected',
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
    title: {
      text: 'Were you admitted to Andover?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      // data: [16, 40, 16, 85]
      data: [10.74, 25.5, 9.4, 54.36],
      showInLegend: false
    }]
  });
});
