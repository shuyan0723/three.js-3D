import { useRef,useEffect } from 'react'
import * as echarts from 'echarts'

function App() {
   const chartRef=useRef<HTMLDivElement>(null);
    
   useEffect(()=>{
    if(chartRef.current){
      const myChart=echarts.init(chartRef.current);
      const option={
        title:{text:'各大宠物项目收入',},
        tooltip:{},
        legend:{data:['销量'],},
        xAxis:{
          type:'category',
          data:['撸猫','运费','卖宠物钱','猫粮','洗澡费','配种费']
        },
        yAxis:{
          type:'value'
        },
        series:[{name:'销量',type:'line',
          data:[335,522,755,900,600,664]
        },
        ]
      }
      myChart.setOption(option)
    }
   },[])
  return (
   <div ref={chartRef} style={{width:'600px',height:'400px'}}></div>
  )
}

export default App
