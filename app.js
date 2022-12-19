
// initialize the echarts instance and choose dark mode
var myChart = echarts.init(document.getElementById("barChart"),'dark');
// Draw the chart
myChart.setOption({
  title: {
    text: "ECharts Getting Started Example",
  },
  tooltip: {},
  xAxis: {
    data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
  },
  yAxis: {},
  series: [
    {
      name: "sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
});
