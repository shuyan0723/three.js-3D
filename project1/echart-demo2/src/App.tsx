import { useRef, useEffect } from 'react'
import * as echarts from 'echarts'

function App() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      const option = {
        title: { text: '宠物项目收入趋势', top: '0%', left: 'center', },
        tooltip: { trigger: 'axis' },
        legend: { data: ['狗粮', '运费', '卖宠物钱', '猫粮', '洗澡费', '配种费'], top: '10%', left: 'center', },
        // 另存图片
        toolbox:{
          feature:{
            saveAsImage:{
              title: '保存为图片',
              iconStyle: {
                borderColor: '#d72020ff'
              },
              emphasis: {
                iconStyle: {
                  borderColor: '#0a0909ff'
                }
              }
            }
          }
        },
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          top: '20%',
          left: '0%',
          right: '5%',
          bottom: '10%'
        },
        series: [{
          name: '狗粮',
          type: 'line',
          data: [335, 522, 755, 900, 600, 664, 880],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#5470c6'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(84, 112, 198, 0.3)' },
              { offset: 1, color: 'rgba(84, 112, 198, 0.05)' }
            ])
          }
        }, {
          name:'运费',
          type:'line',
          data: [150, 280, 420, 350, 580, 490, 620],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#91cc75'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(145, 204, 117, 0.3)' },
              { offset: 1, color: 'rgba(145, 204, 117, 0.05)' }
            ])
          }
        }, {
          name:'卖宠物钱',
          type:'line',
          data: [800, 1200, 950, 1500, 1100, 1300, 1600],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#fac858'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(250, 200, 88, 0.3)' },
              { offset: 1, color: 'rgba(250, 200, 88, 0.05)' }
            ])
          }
        }, {
          name:'猫粮',
          type:'line',
          data: [280, 450, 680, 520, 720, 590, 780],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#ee6666'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(238, 102, 102, 0.3)' },
              { offset: 1, color: 'rgba(238, 102, 102, 0.05)' }
            ])
          }
        }, {
          name:'洗澡费',
          type:'line',
          data: [90, 150, 220, 180, 280, 240, 320],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#3ba272'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(59, 162, 114, 0.3)' },
              { offset: 1, color: 'rgba(59, 162, 114, 0.05)' }
            ])
          }
        }, {
          name:'配种费',
          type:'line',
          data: [500, 800, 650, 1000, 750, 900, 1100],
          smooth: true,
          lineStyle: {
            width: 3
          },
          itemStyle: {
            color: '#73c0de'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(115, 192, 222, 0.3)' },
              { offset: 1, color: 'rgba(115, 192, 222, 0.05)' }
            ])
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
