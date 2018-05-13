require(['echarts', 'echarts/chart/chord'], function (echarts) {

  var myChart = echarts.init(document.getElementById('main'));
  var colors = [];
  for (var i = 0; i < 20; i++) {
    if (i < 10) {
      colors.push('red');
    } else {
      colors.push('blue');
    }
  }

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        // link
        if (params.indicator2) {
          /*         return params.indicator2 + ' ' + params.name + ' ' + params.indicator; */
          return params.indicator2 + ' - ' + params.indicator;
        }
        // node
        else {
          return params.name
        }
      }
    },
    /*   legend: {
        x: 'left',
        data: ['United States', 'China', 'Canada']
      }, */
    series: [{
      type: 'chord',
      //sort: 'ascending',
      //sortSub: 'descending',
      clickable: false,
      itemStyle: {
        normal: {
          color: 'black',
          label: {
            rotate: true,
          }
        }
      },
      //clockWise: true,
      /*      markPoint: {
               large: true,
            data: [
            {
            x: 0, y: 0,
            }
            ]
               }, */
      nodes: [{
        name: 'Riskware/Asparnet',
        itemStyle: {
          normal: {
            /*             color: 'black',
                        width: 500,
                        chordStyle: {
                          color: 'black',
                          borderColor: 'black',
                          borderWidth: 500,
                        }, */
          }
        }
      },
      {
        name: 'W32/Monderb.G!tr'
      },
      {
        name: 'W32/BHO.JDH!tr'
      },
      {
        name: 'Adware/Dealply'
      },
      {
        name: 'Riskware/CoinMiner'
      },
      {
        name: 'W32/Conficker.U!worm'
      },
      {
        name: 'Riskware/BitCoin'
      },
      {
        name: 'Virus 1'
      },
      {
        name: 'Virus 2'
      },
      {
        name: 'Virus 3'
      },
      {
        name: 'United States',
      },
      {
        name: 'China'
      },
      {
        name: 'Canada'
      },
      {
        name: 'Mexico'
      },
      {
        name: 'United Kingdom'
      },
      {
        name: 'Italy'
      },
      {
        name: 'Brazil'
      },
      {
        name: 'France'
      },
      {
        name: 'Spain'
      },
      {
        name: 'Iceland'
      },
      ],
      links: [{
        source: 'United States',
        target: 'Riskware/Asparnet',
        weight: 0.5,
        name: 'link_name',
      },
      {
        source: 'United Kingdom',
        target: 'Riskware/Asparnet',
        weight: 0.2,
        name: 'link_name'
      },
      {
        source: 'United States',
        target: 'W32/Monderb.G!tr',
        weight: 0.7,
        name: 'link_name'
      },
      {
        source: 'Iceland',
        target: 'W32/Monderb.G!tr',
        weight: 0.7,
        name: 'link_name'
      },
      {
        source: 'United States',
        target: 'W32/BHO.JDH!tr',
        weight: 0.9,
        name: 'link_name'
      },
      {
        source: 'Brazil',
        target: 'W32/BHO.JDH!tr',
        weight: 0.9,
        name: 'link_name'
      },
      {
        source: 'China',
        target: 'Adware/Dealply',
        weight: 0.9,
        name: 'link_name'
      },
      {
        source: 'China',
        target: 'Riskware/CoinMiner',
        weight: 0.1,
        name: 'link_name'
      },
      {
        source: 'France',
        target: 'Riskware/CoinMiner',
        weight: 0.1,
        name: 'link_name'
      },
      {
        source: 'China',
        target: 'W32/Conficker.U!worm',
        weight: 0.5,
        name: 'link_name'
      },
      {
        source: 'Canada',
        target: 'Riskware/BitCoin',
        weight: 0.6,
        name: 'link_name'
      },
      {
        source: 'Spain',
        target: 'Riskware/BitCoin',
        weight: 0.6,
        name: 'link_name'
      },
      {
        source: 'Canada',
        target: 'Virus 1',
        weight: 0.4,
        name: 'link_name'
      },
      {
        source: 'Canada',
        target: 'Virus 2',
        weight: 0.6,
        name: 'link_name'
      },
      {
        source: 'Canada',
        target: 'Virus 3',
        weight: 0.2,
        name: 'link_name'
      },
      {
        source: 'Mexico',
        target: 'Virus 3',
        weight: 0.2,
        name: 'link_name'
      },
      {
        source: 'Italy',
        target: 'Virus 3',
        weight: 0.2,
        name: 'link_name'
      },

      // Ribbon Type's chord must be two-directional between points
      // should match the other way?
      {
        source: 'Riskware/Asparnet',
        target: 'United States',
        weight: 0.5
      },
      {
        source: 'Riskware/Asparnet',
        target: 'United Kingdom',
        weight: 0.2,
        name: 'link_name'
      },
      {
        source: 'W32/Monderb.G!tr',
        target: 'United States',
        weight: 0.7
      },
      {
        source: 'W32/Monderb.G!tr',
        target: 'Iceland',
        weight: 0.7
      },
      {
        source: 'W32/BHO.JDH!tr',
        target: 'United States',
        weight: 1
      },
      {
        source: 'W32/BHO.JDH!tr',
        target: 'Brazil',
        weight: 0.9,
        name: 'link_name'
      },
      {
        source: 'Adware/Dealply',
        target: 'China',
        weight: 1
      },
      {
        source: 'Riskware/CoinMiner',
        target: 'China',
        weight: 0.1
      },
      {
        source: 'Riskware/CoinMiner',
        target: 'France',
        weight: 0.1
      },
      {
        source: 'W32/Conficker.U!worm',
        target: 'China',
        weight: 0.5
      },
      {
        source: 'Riskware/BitCoin',
        target: 'Canada',
        weight: 0.6
      },
      {
        source: 'Riskware/BitCoin',
        target: 'Spain',
        weight: 0.6
      },
      {
        source: 'Virus 1',
        target: 'Canada',
        weight: 0.4
      },
      {
        source: 'Virus 2',
        target: 'Canada',
        weight: 0.6
      },
      {
        source: 'Virus 3',
        target: 'Canada',
        weight: 0.2
      },
      {
        source: 'Virus 3',
        target: 'Mexico',
        weight: 0.2
      },
      {
        source: 'Virus 3',
        target: 'Italy',
        weight: 0.2
      },
      ]
    }]
  };

  option.series[0].nodes.forEach(function (node, i) {
    var color;
    var fontStyle;
    if (i < 10) {
      color = 'red';
      fontStyle = 'normal';
    }
    else {
      color = 'blue';
      fontStyle = 'italic';
    }
    node.itemStyle = {
      normal: {
        /*             color: 'black',
                    width: 500,
                    chordStyle: {
                      color: 'black',
                      borderColor: 'black',
                      borderWidth: 500,
                    }, */
        label: {
          textStyle: {
            color: color,
            fontWeight: 'bold',
            fontStyle: fontStyle,
          }
        }
      }
    }
  })

  myChart.setOption(option);
  console.log(myChart.getOption());
});