import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'
import './App.css'

function App() {
  // 创建三个图表的引用
  const pieChartRef = useRef<HTMLDivElement>(null);
  const lineChartRef = useRef<HTMLDivElement>(null);
  const barChartRef = useRef<HTMLDivElement>(null);

  // 饼图配置
  useEffect(() => {
    if (pieChartRef.current) {
      const myChart = echarts.init(pieChartRef.current);
      const option = {
        title: { text: '各大宠物项目收入', },
        tooltip: {},
        legend: { data: ['销量'], },
        series: [{ name: '销量', type: 'pie',
          data: [
            { value: 335, name: '撸猫' },
            { value: 522, name: '运费' },
            { value: 755, name: '卖宠物钱' },
            { value: 900, name: '猫粮' },
            { value: 600, name: '洗澡费' },
            { value: 664, name: '配种费' }
          ]
        }]
      };
      myChart.setOption(option);
      
      const handleResize = () => myChart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  // 折线图配置
  useEffect(() => {
    if (lineChartRef.current) {
      const myChart = echarts.init(lineChartRef.current);
      const option = {
        title: { text: '宠物项目收入趋势', },
        tooltip: { trigger: 'axis' },
        legend: { data: ['狗粮', '运费', '卖宠物钱', '猫粮', '洗澡费', '配种费'], },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '狗粮',
          type: 'line',
          data: [335, 522, 755, 900, 600, 664, 880],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#5470c6' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(84, 112, 198, 0.3)' },
              { offset: 1, color: 'rgba(84, 112, 198, 0.05)' }
            ])
          }
        }, {
          name:'运费',
          type:'line',
          data: [135, 322, 355, 500, 650, 364, 850],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#91cc75' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }, {
          name:'卖宠物钱',
          type:'line',
          data: [135, 322, 355, 500, 650, 364, 850],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#91cc75' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }, {
          name:'猫粮',
          type:'line',
          data: [135, 322, 355, 500, 650, 364, 850],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#91cc75' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }, {
          name:'洗澡费',
          type:'line',
          data: [135, 322, 355, 500, 650, 364, 850],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#91cc75' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }, {
          name:'配种费',
          type:'line',
          data: [135, 322, 355, 500, 650, 364, 850],
          smooth: true,
          lineStyle: { width: 3 },
          itemStyle: { color: '#91cc75' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }]
      };
      myChart.setOption(option);
      
      const handleResize = () => myChart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  // 柱状图配置
  useEffect(() => {
    if (barChartRef.current) {
      const myChart = echarts.init(barChartRef.current);
      const option = {
        title: { text: '各大宠物项目收入', },
        tooltip: { trigger: 'axis' },
        legend: { data: ['收入'], },
        xAxis: {
          type: 'category',
          data: ['撸猫', '运费', '卖宠物钱', '猫粮', '洗澡费', '配种费'],
          axisLabel: {
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '收入',
          type: 'bar',
          data: [335, 522, 755, 900, 600, 664],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          }
        }]
      };
      myChart.setOption(option);
      
      const handleResize = () => myChart.resize();
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div className="chart-container">
      <div className="chart-item">
        <div ref={pieChartRef} style={{ width: '400px', height: '400px' }}></div>
      </div>
      <div className="chart-item">
        <div ref={lineChartRef} style={{ width: '400px', height: '400px' }}></div>
      </div>
      <div className="chart-item">
        <div ref={barChartRef} style={{ width: '400px', height: '400px' }}></div>
      </div>
    </div>
  )
}

export default App
