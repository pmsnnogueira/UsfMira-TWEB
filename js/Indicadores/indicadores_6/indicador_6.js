var options = {
    series: [{
    name: 'População Vacinada',
    data: [22,20,18,15,10]
  }, {
    name: 'Médicos e Enfermeiros vacinados',
    data: [8, 5, 12, 10, 14,10,14,10,15,15,12,10]
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
    categories: ["2020-01-12","2020-01-11","2020-01-10","2020-01-09","2020-01-08","2020-01-07","2020-01-06","2020-01-05", "2020-01-04", "2020-01-03", "2020-01-02", "2020-01-01"]
  },
  tooltip: {
  
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();