import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";
import { createBoneco } from './boneco.js';
var light
const cena = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new THREE.TextureLoader();
const controlador = new OrbitControls(camera, renderer.domElement);
controlador.minDistance = 10;
controlador.maxDistance = 80;
// Posicionar a câmera para visualizar o plano
camera.position.z = 50;
camera.position.y = 10;
const boneco = createBoneco(2); // Cria um boneco com escala 2 (dobro do tamanho padrão)
cena.add(boneco); // Adiciona o boneco à cena

function animate() {
    requestAnimationFrame(animate);
    renderer.render(cena, camera);
}
animate();