// import { useState, useEffect, useRef } from 'react'
// import './App.css'

// function App() {
//   // 用于存储当前显示的文本内容，初始为空字符串
//   const [displayText, setDisplayText] = useState('')
//   // 用于控制打字速度（毫秒），初始1000ms
//   const [speed, setSpeed] = useState(1000)
  
//   // 要显示的完整文本内容
//   const fullText = '一一一，的的的分，fsdfefrgrdgtrdhrdhrdhrdhrdhhd'
//   // 使用useRef存储完整文本，避免每次渲染都重新创建
//   const textRef = useRef(fullText)
//   // 使用useRef存储定时器ID，方便清理
//   const intervalRef = useRef(null)
  
//   // useEffect用于处理副作用（设置定时器）
//   useEffect(() => {
//     // currentIndex用于记录当前显示到第几个字符
//     let currentIndex = 0
    
//     // 设置定时器，每隔speed毫秒执行一次
//     intervalRef.current = setInterval(() => {
//       // 如果还没显示完所有字符
//       if (currentIndex <= textRef.current.length) {
//         // 截取字符串的前currentIndex个字符并更新状态
//         setDisplayText(textRef.current.slice(0, currentIndex))
//         // 索引递增
//         currentIndex++
//       } else {
//         // 显示完毕，清除定时器
//         clearInterval(intervalRef.current)
//       }
//     }, speed)
    
//     // 组件卸载或依赖项变化时，清除定时器防止内存泄漏
//     return () => clearInterval(intervalRef.current)
//   }, [speed]) // speed变化时会重新执行
  
//   return (
//     <div className="App">
//       {/* 显示打字机效果的内容 */}
//       <p className="typewriter-text">{displayText}</p>
//     </div>
//   )
// }

// export default App

import { useState,useEffect } from "react";

function useDebounce(value,delay){
  // 使用useState存储防抖后的值
  const [debouncedValue,setDebouncedValue]=useState(value);

  // 使用useEffect实现防抖逻辑
  useEffect(()=>{
    // 设置一个定时器，在延迟时间后更新防抖值
    const handler=setTimeout(()=>{
      setDebouncedValue(value)
    },delay);
    // 在组件卸载或依赖项变化时清除定时器
    return ()=>clearTimeout(handler);
  },[value,delay])
 // 返回防抖后的值
 return debouncedValue
}

function SearchInput(){
  // 真实的输入值
  const [inputValue,setInputValue]= useState('')
  // 防抖后的值
  const debouncedValue=useDebounce(inputValue,500);
  // 模拟搜索函数
  const handleSearch=()=>{
    console.log('搜索:',debouncedValue);
  };
  // 使用useEffect监听防抖值的变化
  useEffect(()=>{
    if(debouncedValue){
      handleSearch();
    }
  },[debouncedValue]);
  return (
    <div>
      <input
      type="text"
      value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      placeholder="防抖"
      />
    </div>
  )
}

export default SearchInput