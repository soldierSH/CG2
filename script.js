import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/loaders/DRACOLoader.js";
import {LuzPoint,LuzDirecional} from './Luz.js';
import {PisoPrincipal, Piso} from './Piso.js';
import {Mesa} from './Mesa.js';
import { Pessoa } from './Pessoa.js';
import { BolaPingPong } from './Bola.js';

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


// iluminação
// Função de animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(cena, camera);
}

export function init(){
  LuzDirecional(cena,new THREE.Color(0xFFFFFF),0.6,0,18,0)
  Mesa(cena,0,-12,0,0,20)
  LuzPoint(cena, new THREE.Color(0xFFFFFF), 0.8, 0, 38, 0);
  PisoPrincipal(cena,0,-12.8,0,100,100);
  Piso(cena,new THREE.Color(0x26AEFF),0,-13,0,200,200);
  //Pessoa(cena,new THREE.Color(0x26AEFF),0,0,0)
  //BolaPingPong(cena,0,-11,0,4,'./img/bola.png')
  animate();
}
init()