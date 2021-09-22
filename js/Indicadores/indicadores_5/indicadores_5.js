var options = {
    series: [{
    
    name: 'Natalidade',
    data: [20,31,30,9,8,5,10]
  }, {
    name: 'Mortalidade',
    data: [10,25,22,20,15,10,5],
    
  }],
    colors: ['#3DC8C9','#FC615E'],
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
    categories: ["2020-01-01","2019-12-12","2019-010-11","2019-07-10","2019-05-09","2019-03-01","2019-01-01"]
  },
  tooltip: {
  
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();