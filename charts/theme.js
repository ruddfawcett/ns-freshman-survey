Highcharts.theme = {
  // colors: ['#505050', '#646464', '#787878', '#8C8C8C', '#B4B4B4', '#C8C8C8', '#DCDCDC', '#F0F0F0'],
  colors: ['#F0F0F0', '#C8C8C8', '#8C8C8C', '#787878', '#646464', '#505050'],
  // colors: ['#003160', '#842628'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: "'Lato', sans-serif"
    }
  },
  plotOptions: {
    series: {
      animation: false,
      dataLabels: {
        enabled: false,
        style: {
          color: '#474747',
          textShadow: false
        },
        formatter: dataLabelFormatter
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  title: {
    text: null,
    style: {
      color: '#949494',
      fontWeight: '700',
      fontSize: '16px',
      textTransform: 'uppercase'
    }
  },
  subtitle: {
    text: null,
    style: {
      color: '#474747'
    }
  },
  xAxis: {
    gridLineColor: 'rgba(0, 0, 0, 0.1)',
    gridLineWidth: 1,
    style: {
      color: '#474747'
    },
    title: {
      text: null,
      style: {
        color: '#474747'
      }
    },
    labels: {
      style: {
        color: '#474747'
      }
    }
  },
  yAxis: {
    gridLineColor: 'rgba(0, 0, 0, 0.1)',
    gridLineWidth: 1,
    reversedStacks: false,
    style: {
      color: '#474747'
    },
    title: {
      text: '',
      style: {
        color: '#474747'
      }
    },
    labels: {
      style: {
        color: '#474747'
      }
    }
  },
  legend: {
    align: 'center',
    itemStyle: {
      color: '#474747',
      fontWeight: 'normal'
    },
    verticalAlign: 'bottom',
    backgroundColor: null,
    borderWidth: 0,
    shadow: false
  },
  tooltip: {
    animation: false,
    shadow: false,
    column: {
      formatter: columnToolTipFormatter
    }
  },
};

Highcharts.setOptions(Highcharts.theme);
