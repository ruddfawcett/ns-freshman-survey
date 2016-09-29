$(function () {
  $('#general .chart.race').highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: [
        ''
      ]
    },
    series: [{
        name: 'Andover',
        data: [151, 121]
      },
      {
        name: 'Exeter',
        data: [123, 2]
      }
    ]
  });
});
