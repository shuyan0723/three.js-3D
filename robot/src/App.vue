<template>
  <div class="canvas-container" ref="screenDom"></div>
</template>

<script setup>
import * as THREE from 'three';
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

let screenDom = ref(null);
onMounted(() => {
  // 创建场景
  let scene = new THREE.Scene();
  // 创建相机
  let camera = new THREE.PerspectiveCamera(
    75,
    screenDom.value.clientWidth / screenDom.value.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1.5, 6);
  // 创建渲染器
  let renderer= new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight);
  // 将渲染器的DOM元素添加到容器中
  screenDom.value.appendChild(renderer.domElement);
  // 创建辅助坐标轴
  let axes=new THREE.AxesHelper(5);
  scene.add(axes);
// 添加控制器
let control=new OrbitControls(camera, renderer.domElement);

// 创建图片加载器替代HDR加载器
let loader = new THREE.TextureLoader();
loader.load('/src/assets/xingxing.jpg', 
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
    scene.background = texture;
  });
// 添加机器人
// 设置解压缩的加载器
let dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/gltf');
dracoLoader.setDecoderConfig({ type: 'js' });
let gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);
gltfLoader.load('/src/assets/robot.glb', (gltf) => {
  scene.add(gltf.scene);
});
// 添加直线光
let light1=new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(5, 10, 7);

  function render(){
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();

})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.canvas-container {
  width: 100vw;
  height: 100vh;
}
</style>
