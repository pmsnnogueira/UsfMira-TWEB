var options = {
    series: [{
    name: 'Homem',
    data: [0,-13,-44, -127, -254, -309, -370, -354, -356, -382, -392, -462,
        -420, -380, -316, -290, -278, -315, -334, -338, -220, -48
      ]
  },
  {
    name: 'Mulher',
    data: [6, 54, 172, 345, 443, 464, 546, 440, 486, 453, 497, 529, 530, 469, 355,
        293, 303, 309,298,284,229,64,
      ]
  }
  ],
    chart: {
    type: 'bar',
    height: 500,
    stacked: true
    
  },
  colors: ['#14A79C', '#FF4560'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
  
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ["#fff"]
  },
  
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  yaxis: {
    min: -600,
    max: 600,
    title: {
       text: 'Idade',
    },
  },
  tooltip: {
    shared: false,
    x: {
      formatter: function (val) {
        return val
      }
    },
    y: {
        formatter: function (val) {
            return Math.abs(val) + ""
          }
    }
  },
  title: {
    text: 'Faixa etária'
  },
  xaxis: {
    categories: ['>100','95-99','90-94','85-89', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
    '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9','1-4'
    ,'<1'
        ],
    title: {
      text: 'Utentes Inscritos'
    },
    labels: {
        formatter: function (val) {
          return Math.abs(Math.round(val)) + ""
        }
      }
    },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

