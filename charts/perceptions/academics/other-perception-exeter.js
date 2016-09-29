$(function () {
  // andover acadmic
  $('#comparisons .chart.other-perception-academic-exeter').highcharts({
    // colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Very academically-oriented',
        'Somewhat academically-oriented',
        'Not very academically-oriented'
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
        // data: [54, 85, 18],
        showInLegend: false,
        data: [34.39, 54.14, 11.46]
      }
    ]
  });
});
