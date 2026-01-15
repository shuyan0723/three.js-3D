import { useRef, useState } from 'react';
import { Canvas, useGLTF, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 机器人模型组件
function RobotArm() {
  const { scene } = useGLTF('/robot-arm.glb'); // 替换为自己的机器人模型路径
  const armRef = useRef<any>(null);
  // 关节角度状态（React 状态绑定 Three.js 模型）
  const [jointAngle, setJointAngle] = useState(45);

  // 实时更新关节角度
  useFrame(() => {
    if (armRef.current) {
      // 定位到机器人关节节点（需根据自己的模型结构调整节点名称）
      armRef.current.rotation.x = (jointAngle * Math.PI) / 180;
    }
  });

  return (
    <primitive
      object={scene}
      ref={armRef}
      position={[0, 0, 0]}
      scale={1}
    />
  );
}

// 主组件
export default function Robot3DApp() {
  const [jointAngle, setJointAngle] = useState(45);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* React 操控面板 */}
      <div style={{ width: '300px', padding: '20px' }}>
        <h3>机器人关节控制</h3>
        <label>关节1角度：{jointAngle}°</label>
        <input
          type="range"
          min={0}
          max={90}
          value={jointAngle}
          onChange={(e) => setJointAngle(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>
      {/* Three.js 3D 画布 */}
      <Canvas style={{ flex: 1 }} camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RobotArm jointAngle={jointAngle} />
        <OrbitControls />
        <gridHelper args={[20, 20]} />
      </Canvas>
    </div>
  );
}