$(function () {
  $('#academics .exeter.subject').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
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
        data: [1.34, 18.79, 8.05, 33.56, 5.37, 17.45, 5.37, 3.36, 2.01, 4.70],
        showInLegend: false
      }
    ]
  });
});
