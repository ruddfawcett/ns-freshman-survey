$(function () {
  $('#middle-school .chart.subject-exeter').highcharts({
    chart: {
      type: 'bar'
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
      ],
      labels: {
        rotation: -90,
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false
        }
      }
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [
      {
        data: [2, 32, 13, 51, 9, 26, 9, 5, 3, 7]
      }
    ]
  });
});
