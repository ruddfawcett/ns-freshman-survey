$(function () {
  $('#academics .andover.subject').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Art',
        'English',
        'History and Social Science',
        'Mathematics, Statistics, and Computer Science',
        'Music',
        'Natural Sciences',
        'Physical Education',
        'Philosophy and Religious Studies',
        'Theatre and Dance',
        'World Languages'
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
      text: 'What is your favorite subject?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        // data: [7, 25, 28, 54, 3, 26, 5, 3, 10, 8]
        data: [4.14, 14.97, 16.57, 31.95, 1.78, 15.38, 2.96, 1.78, 5.92, 4.73],
        showInLegend: false
      }
    ]
  });
});
