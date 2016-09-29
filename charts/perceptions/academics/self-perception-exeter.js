$(function () {
  // Exeter acadmic
  $('#perceptions .exeter.self-perception-academic').highcharts({
    //     colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    colors: ['#580306', '#C70A14', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Very academically-oriented',
        'Somewhat academically-oriented',
        'Not very academically-oriented'
      ]
    },
    yAxis: {
      max: 100
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [76.43, 22.92, 0.64],
      showInLegend: false
      // data: [120, 36, 1]
    }]
  });
});
