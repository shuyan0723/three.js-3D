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
        series:[{name:'销量',type:'pie',
          data:[
            {value:335,name:'撸猫'},
            {value:522,name:'运费'},
            {value:755,name:'卖宠物钱'},
            {value:900,name:'猫粮'},
            {value:600,name:'洗澡费'},
            {value:664,name:'配种费'}
          ]
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
