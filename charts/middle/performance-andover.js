/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#middle-school .andover.performance').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Very Good',
        'Good',
        'Neutral',
        'Poor',
        'Very Poor'
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
      text: 'How would you define your academic performance in middle school?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [83.43, 16.57, 0,0,0,],
      showInLegend: false
    }]
  });
});
