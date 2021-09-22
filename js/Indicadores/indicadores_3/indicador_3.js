var options1 = {
    series: [68.45],
    chart: {
    height: 250,
    type: 'radialBar',
  },
  colors: ['#FC615E'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },



  },
  labels: ['Total'],
};



var options2 = {
    series: [18.25],
    chart: {
    height: 250,
    type: 'radialBar',
  },
  colors: ['#3DC8C9'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Jovens'],
};



var options3 = {
    series: [68.45],
    chart: {
    height: 250,
    type: 'radialBar',
  },
  colors: ['#F2C300'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },



  },
  labels: ['Idosos'],
};

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart1.render();
  chart2.render();
  chart3.render();



