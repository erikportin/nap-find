$(function(){var a;try{a=managerHistory||{}}catch(b){}if(_.has(a,"gameWeek")){var c=!1;$(".m-manager-history-line-chart-container").bind("inview",function(b,d,e,f){d&&!c&&"both"==f&&(c=!0,$(".m-manager-history-line-chart-container").highcharts({chart:{backgroundColor:"rgba(255, 255, 255, 0.1)"},title:{text:""},xAxis:{title:"",categories:a.gameWeek,labels:{enabled:!1}},yAxis:{plotLines:[{value:0,width:1,color:"#fff"}],title:""},tooltip:{backgroundColor:"#000",borderRadius:10,borderWidth:0},legend:{},series:[{name:"Points",color:"#000",data:a.points},{name:"Average points",color:"#000",data:a.averagePoints}],credits:{enabled:!1}}))})}});