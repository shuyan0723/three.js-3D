import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

function App() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
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
      
      const handleResize = () => {
        myChart.resize();
      };
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);

  return (
    <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
  )
}

export default App
