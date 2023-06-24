import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import { PlacaLuminosa1,PlacaLuminosa2 } from './Placa.js';

const loader = new THREE.TextureLoader();
export function PisoPrincipal(cena, x, y, z,largura,altura) {
    const plane = new THREE.PlaneGeometry(largura, altura);
    var p = loader.load('./img/O5GLMS0.jpg');
    var material = new THREE.MeshStandardMaterial({ map: p, roughness: 0.4, metalness: 0.2});
    const piso = new THREE.Mesh(plane, material);
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(2, 2); //quantidade de repetições
  
    

    
    PlacaLuminosa1(cena,0x2E2E2E,50.6,-13.5,0,100,24,1,0.5);
    PlacaLuminosa2(cena,0x2E2E2E,-50.6,-13.5,0,100,24,1,1.5);
    piso.rotation.x = Math.PI * -0.5;
    piso.receiveShadow = true;
    cena.add(piso);
    piso.position.set(x, y, z); //posição do piso

        
    
}
export function Piso(cena, cor, x, y, z,largura,altura) {
    const plane = new THREE.PlaneGeometry(largura, altura);
    var material = new THREE.MeshPhongMaterial({color: cor});
    const piso = new THREE.Mesh(plane, material);
    piso.receiveShadow = true;
    piso.rotation.x = Math.PI * -0.5;
    cena.add(piso);
    piso.position.set(x, y, z); //ajustando as coordenadas (x, y, z) ppra mover o piso
}