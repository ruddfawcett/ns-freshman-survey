/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#perceptions .exeter.other-perception-social').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very<br />socially-oriented',
        'Somewhat<br />socially-oriented',
        'Not very<br />socially-oriented'
      ],
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
      text: 'Perception of students at Andover is that they are...'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [36.94, 50.96, 12.1],
      showInLegend: false
    }]
  });
});
