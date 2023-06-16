import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";

//import * as THREE from "https://cdn.skypack.dev/three";
var light
// Criar uma cena, uma câmera e um renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new THREE.TextureLoader();
const controlador = new OrbitControls(camera, renderer.domElement);
// Posicionar a câmera para visualizar o plano
camera.position.z = 15;
// iluminação
function CriarLuzAmbiente(cor, intensidade){
  light = new THREE.AmbientLight(cor, intensidade);
  scene.add(light)
}
// Função de animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
function CriarLuzDirecional(cor, intensidade, x, y, z) {
  light = new THREE.DirectionalLight(cor, intensidade);
  light.position.set(x, y, z);
  light.target.position.set(0, 0, 0);
  light.castShadow = true;

  // configure directional light camera
  light.shadow.camera.zoom = .1;

  scene.add(light);
  scene.add(light.target);

  const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(cameraHelper);
}
function CriarPiso(cor) {
  const plane = new THREE.PlaneGeometry(25, 25);
  const material = new THREE.MeshBasicMaterial({ map: loader.load('https://imgur.com/J4sRbA4') });
  var ma = new THREE.MeshBasicMaterial({color: cor});

  const piso = new THREE.Mesh(plane, material);
  piso.rotation.x = Math.PI * -0.5;
  scene.add(piso);

  piso.position.set(0, -4, 0); // Ajuste as coordenadas (x, y, z) para mover o piso
}

CriarLuzDirecional(new THREE.Color(0xFFFFFF), 1, 0, 9, 0);
CriarPiso(new THREE.Color(0xFFB34D));
animate();