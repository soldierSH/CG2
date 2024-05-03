import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";
import {LuzPoint} from './Luz.js';
import {PisoPrincipal, Piso} from './Piso.js';
import {Mesa} from './Mesa.js';
import { Bola } from './Bola.js';
import { Raquete } from './Raquete.js';
import { Teto } from './Teto.js';

var light
const cena = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.frustumCulled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const loader = new THREE.TextureLoader();
const controlador = new OrbitControls(camera, renderer.domElement);
controlador.minDistance = 10;
controlador.maxDistance = 70;
// Posicionar a câmera para visualizar o plano
camera.position.z = 35;
camera.position.y = 8;


function animate() {
  requestAnimationFrame(animate);
  renderer.render(cena, camera);
}

const loaderDae = new 

function init(){
  Mesa(cena,0,-12,0,0,20)
  LuzPoint(cena, new THREE.Color(0xFFFFFF), 0.5, 0, 34, 0);
  PisoPrincipal(cena,0,-12.8,0,100,100);
  Piso(cena,new THREE.Color(0x26AEFF),0,-21,0,200,200);
  Teto(cena,0,40,0,0,200)
  Bola(cena,camera,renderer,-18,-2.5,2,1.5,'./img/bola1.jpg',200)
  Raquete(cena,camera,renderer, new THREE.Color(0xFFB34D),-17.9, -3.8,1,-1)
  Raquete(cena,camera,renderer, new THREE.Color(0x9440FF),16,-2.5,2,0.6)
  animate();
}
//init()

