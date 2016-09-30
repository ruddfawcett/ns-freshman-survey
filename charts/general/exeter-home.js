/**
 * Copyright (c) 2016 Non Sibi Press
 * Cite Non Sibi Press if using any information from this survey.
 *
 * This project is open source at https://github.com/nonsibipress.
 */
$(function () {
  $('#general .exeter.home').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'United States - Northeast',
        'United States - Midwest',
        'United States - West',
        'United States - Southwest',
        'United States - Southeast',
        'United States - Discontiguous',
        'Outside of United States'
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
      text: 'Where are you from?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [65.10, 8.72, 6.04, 4.03, 10.07, 1.34, 4.70],
      showInLegend: false
    }]
  });
});
