var options = {
    series: [{
    name: 'Taxa de Visitas domiciliárias(Médicos)',
    data: [50,20,12,7,5]
  }, {
    name: 'Taxa de Visitas domiciliárias(Enfermeiros)',
    data: [200, 50, 120, 30, 40]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2020-02-19T00::00.000Z", "2020-01-19T01:30:00.000Z", "2019-12-19T02:30:00.000Z", "2019-09-19T03:30:00.000Z", "2019-06-19T04:30:00.000Z"]
  },
  tooltip: {
  
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();