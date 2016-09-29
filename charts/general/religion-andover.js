$(function () {
  $('#general .andover.religion').highcharts({
    colors: ['#082B55', '#125AB2', '#178DE7', '#65B9FC', '#ABDCFD'],
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
      data: [19.46, 28.19, 1.34, 27.52, 3.36, 2.01, 4.70, 0, 13.42],
      showInLegend: false
    }]
  });
});
