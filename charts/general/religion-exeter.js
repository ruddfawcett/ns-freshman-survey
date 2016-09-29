$(function () {
  $('#general .exeter.religion').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        'Agnosticism',
        'Atheism',
        'Buddhism',
        'Catholicism',
        'Hinduism',
        'Islam',
        'Judaism',
        'Mormonism',
        'Protestantism'
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
      text: 'With which religion or belief system do you identify?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [15.38, 24.85, 2.37, 30.18, 3.55, 1.78, 5.33, 0, 16.57],
      showInLegend: false
    }]
  });
});
