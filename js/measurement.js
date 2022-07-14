let selectOutput = document.querySelector("#change-graph");

//making the minutes display on load

 var optionsMin = {
  series: [{
    name: "Voltage",
    data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
    name: "Current",
    data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
    name: 'Frequency',
    data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
    name: 'Temperature',
    data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
    name: 'Vibration',
    data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-100, -80, -200, -111, -51,-180 , -10 ]
  }
],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [2, 2, 2],
  curve: 'smooth',
  dashArray: [0, 0, 0]
},
title: {
  text: 'Page Statistics',
  align: 'left'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['3:56pm', '3:57pm', '3:58pm', '3:59pm', '4:00pm', '4:01pm','4:02pm','4:03pm'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (mins)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " per session"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
}
};



var chart = new ApexCharts(document.querySelector("#chart"), optionsMin);
chart.render();

//graph changing options


function handleGraph () {
  let changeGraph = document.getElementById("chart");
  console.log(changeGraph);

  if (changeGraph === "true") {
    chart.updateOptions({
    series: [{
    name: "Voltage",
    data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
    name: "Current",
    data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
    name: 'Frequency',
    data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
    name: 'Temperature',
    data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
    name: 'Vibration',
    data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-100, -80, -200, -111, -51,-180 , -10 ]
  }
],
})
  } else {
    chart.updateOptions({
    series: [{
    name: "Voltage",
    data: [0, 35, 130, -10, 50, 117, 300, 25]
  },
  {
    name: "Current",
    data: [10, 5, 98, 0, 1, 188, -100, 3]
  },
  {
    name: 'Frequency',
    data: [111, 53, 300, -100, 5, 15, -220,44]
  },
  {
    name: 'Temperature',
    data: [5, -4, 255, 26, 110, -100,10, -50]
  },
  {
    name: 'Vibration',
    data: [-10, 300, -80, 0, -100, 300,-200, -10]
  },
  {
    name: 'Power',
    data: [-10, -80, -200, -111, -5,280 , 310 ]
  }
],
xaxis: {
  categories: ['4:04pm', '4:05pm', '4:06pm', '4:07pm', '4:08pm', '4:09pm','4:10pm','4:11pm'
  ],
},
})
  }}

  // selectOutput.addEventListener("change", eventValue)


  //graph changing options


function returnGraph () {
  let returnGraph = document.getElementById("chart");
  console.log(returnGraph);

  if (returnGraph === "true") {
      chart.updateOptions({
      series: [{
      name: "Voltage",
      data: [0, 35, 130, -10, 50, 117, 300, 25]
    },
    {
      name: "Current",
      data: [10, 5, 98, 0, 1, 188, -100, 3]
    },
    {
      name: 'Frequency',
      data: [111, 53, 300, -100, 5, 15, -220,44]
    },
    {
      name: 'Temperature',
      data: [5, -4, 255, 26, 110, -100,10, -50]
    },
    {
      name: 'Vibration',
      data: [-10, 300, -80, 0, -100, 300,-200, -10]
    },
    {
      name: 'Power',
      data: [-10, -80, -200, -111, -5,280 , 310 ]
    }
  ],
 
  })
} else {
  chart.updateOptions({
  series: [{
  name: "Voltage",
  data: [50, 35, 110, 150, 60, 67, 50, 25]
  },
  {
  name: "Current",
  data: [120, 155, 98, 0, 166, 188, 100, 53]
  },
  {
  name: 'Frequency',
  data: [0, 53, 6, -100, 55, 95, -10,44]
  },
  {
  name: 'Temperature',
  data: [50, -45, 0, 26, 50, 100,0, -50]
  },
  {
  name: 'Vibration',
  data: [-100, -300, -80, -250, 0, 300,-200, -10]
  },
  {
  name: 'Power',
  data: [-100, -80, -200, -111, -51,-180 , -10 ]
  }
  ],
  xaxis: {
    categories: ['3:56pm', '3:57pm', '3:58pm', '3:59pm', '4:00pm', '4:01pm','4:02pm','4:03pm'
    ],
  },
  })
  } 
}


// chart.updateOptions({
//   series: [{
//     data: [{
//       x: "02-02-2002",
//       y: 44
//     }, {
//       x: "12-02-2002",
//       y: 51
//     }]
//   }],
//   xaxis: {
//     position: 'top'
//   }
// })








  
let checkbox = document.querySelector("#checkbox");
let box = document.querySelector(".box");
 

  function changeBg() {
 
    if (checkbox.checked === true){
      box.style.backgroundColor = "blue";
    } else {
       box.style.backgroundColor = "white";
    }
  }
  
 
 





