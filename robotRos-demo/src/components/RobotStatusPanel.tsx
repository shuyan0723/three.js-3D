import React, { useState, useEffect } from "react";

// 定义机器人状态的TypeScript接口（贴合ROS数据格式）
interface RobotStatus {
  // 位姿坐标（x/y/z）
  position: {
    x: number;
    y: number;
    z: number;
  };
  // 旋转角度（roll/pitch/yaw）
  rotation: {
    roll: number;
    pitch: number;
    yaw: number;
  };
  // 电池电量（0-100）
  battery: number;
  // 运行模式（空闲/运动/充电）
  mode: "idle" | "moving" | "charging";
  // 连接状态（ROS连接）
  rosConnected: boolean;
}

// 机器人状态面板组件
const RobotStatusPanel: React.FC = () => {
  // 初始化机器人状态
  const [robotStatus, setRobotStatus] = useState<RobotStatus>({
    position: { x: 0, y: 0, z: 0 },
    rotation: { roll: 0, pitch: 0, yaw: 0 },
    battery: 100,
    mode: "idle",
    rosConnected: false,
  });

  // 模拟ROS数据订阅（每秒更新状态，后续替换为真实roslib订阅）
  useEffect(() => {
    // 模拟ROS连接成功
    setRobotStatus((prev) => ({ ...prev, rosConnected: true }));

    // 模拟实时状态更新（替代roslib的topic订阅）
    const interval = setInterval(() => {
      setRobotStatus((prev) => ({
        ...prev,
        // 模拟坐标轻微变化
        position: {
          x: parseFloat(
            (prev.position.x + Math.random() * 0.1 - 0.05).toFixed(2)
          ),
          y: parseFloat(
            (prev.position.y + Math.random() * 0.1 - 0.05).toFixed(2)
          ),
          z: parseFloat(
            (prev.position.z + Math.random() * 0.1 - 0.05).toFixed(2)
          ),
        } as { x: number; y: number; z: number },
        // 模拟电量缓慢下降
        battery: prev.battery > 0 ? prev.battery - 0.5 : 0,
        // 随机切换运行模式
        mode: ["idle", "moving", "charging"][Math.floor(Math.random() * 3)] as
          | "idle"
          | "moving"
          | "charging",
      }));
    }, 1000);

    // 清除定时器（组件卸载时）
    return () => clearInterval(interval);
  }, []);

  // 状态样式映射（直观展示状态）
  const getModeStyle = (mode: RobotStatus["mode"]) => {
    switch (mode) {
      case "moving":
        return "bg-green-500 text-white";
      case "charging":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getRosStatusStyle = (connected: boolean) => {
    return connected ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="w-80 h-auto bg-white rounded-lg shadow-md p-4  m-4 border border-gray-200">
      {/* 面板标题 */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">机器人状态面板</h3>
        {/* ROS连接状态指示灯 */}
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${getRosStatusStyle(
              robotStatus.rosConnected
            )}`}
          ></div>
          <span className="text-sm text-gray-600">
            {robotStatus.rosConnected ? "ROS已连接" : "ROS未连接"}
          </span>
        </div>
      </div>

      {/* 核心状态展示 */}
      <div className="space-y-3">
        {/* 位姿信息 */}
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="text-sm font-medium text-gray-700 mb-2">位姿信息</h4>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>X: {robotStatus.position.x}</div>
            <div>Y: {robotStatus.position.y}</div>
            <div>Z: {robotStatus.position.z}</div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm mt-1">
            <div>Roll: {robotStatus.rotation.roll.toFixed(2)}</div>
            <div>Pitch: {robotStatus.rotation.pitch.toFixed(2)}</div>
            <div>Yaw: {robotStatus.rotation.yaw.toFixed(2)}</div>
          </div>
        </div>

        {/* 电池电量 */}
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="text-sm font-medium text-gray-700 mb-2">电池电量</h4>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-500 transition-all duration-300"
              style={{ width: `${robotStatus.battery}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 mt-1 text-right">
            {robotStatus.battery.toFixed(1)}%
          </div>
        </div>

        {/* 运行模式 */}
        <div className="bg-gray-50 p-3 rounded">
          <h4 className="text-sm font-medium text-gray-700 mb-2">运行模式</h4>
          <span
            className={`px-2 py-1 rounded text-xs ${getModeStyle(
              robotStatus.mode
            )}`}
          >
            {robotStatus.mode === "idle" && "空闲"}
            {robotStatus.mode === "moving" && "运动中"}
            {robotStatus.mode === "charging" && "充电中"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RobotStatusPanel;
