/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
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
      data: [10.74, 25.5, 9.4, 54.36],
      showInLegend: false
    }]
  });
});
