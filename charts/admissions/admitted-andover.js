/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#admissions .andover.admitted').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
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
      text: 'Were you admitted to Exeter?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [16.57, 32.54, 2.37, 48.52],
      showInLegend: false
    }]
  });
});
