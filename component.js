$(function() {
    var data = [
      ['Java', '1', '降', '-0.01%'],
      ['C', '2', '升', '+2.44%'],
      ['Python', '3', '升', '+1.41%'],
      ['C++', '4', '降', '-2.58%'],
      ['C#', '5', '升', '+2.07%'],
      ['Visual Basic .NET', '6', '降', '-1.17%'],
      ['JavaScript', '7', '降', '-0.85%']
    ];
  
    var container = $('.main');
    
    var hot = new Handsontable(container.get(0), {
      data: data,
      contextMenu: true,
      manualRowResize : true,  
      manualColumnResize : true, 
      colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
      ],
      className:"htCenter htMiddle",
      rowHeights: [40,40,40,40,40,40,40],
      colWidths: [180,180,180,180]
    });

    var myChart = echarts.init($('.main1').get(0));

    var option = {
      title: {
        text: 'JavsScript语言排名变化'
      },
      xAxis: {
        data:[2000,2005,2010,2015,2020]
      },
      tooltip: {
        formatter:function(params){
          var tip="";
          tip+='&nbsp;&nbsp;排名'+'<br/>'+params.name+':'+params.value;
          return tip;
        }
      },
      yAxis: {},
      series: [{
        name: '排名',
        type: 'line',
        data:[6,9,8,8,7]
      }]
    }

    myChart.setOption(option);
    
    return hot;
});