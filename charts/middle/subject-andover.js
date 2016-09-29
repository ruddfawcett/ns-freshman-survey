$(function () {
  $('#middle-school .chart.subject-andover').highcharts({
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
        data: [7, 25, 28, 54, 3, 26, 5, 3, 10, 8]
      }
    ]
  });
});
