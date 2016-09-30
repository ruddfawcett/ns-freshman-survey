/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#middle-school .andover.type').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Public',
        'Private',
        'Homeschool'
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
      text: 'What type of middle school did you graduate from?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [43.20, 56.80, 0],
      showInLegend: false
    }]
  });
});
