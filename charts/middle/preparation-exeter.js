$(function () {
  $('#middle-school .exeter.preparation').highcharts({
    colors: ['#580306', '#870309', '#C70A14', '#E73035', '#FC6567', '#FDAEAF'],
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [
        'Prepared',
        'Neutral',
        'Unprepared'
      ],
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
      text: 'How prepared do you feel you are for Exeter?'
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [54.36, 40.94, 4.7],
      showInLegend: false
    }]
  });
});
