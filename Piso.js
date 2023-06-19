import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import { PlacaLuminosa } from './Placa.js';

const loader = new THREE.TextureLoader();
export function PisoPrincipal(cena, x, y, z,largura,altura) {
    const plane = new THREE.PlaneGeometry(largura, altura);
    var p = loader.load('./img/O5GLMS0.jpg');
    var material = new THREE.MeshStandardMaterial({ map: p, roughness: 0.4, metalness: 0.2});
    const piso = new THREE.Mesh(plane, material);

    
    PlacaLuminosa(cena,0x2E2E2E,50.6,-12,0,100,20,1,0.5);
    piso.rotation.x = Math.PI * -0.5;
    piso.receiveShadow = true;
    cena.add(piso);
    piso.position.set(x, y, z); // Ajuste as coordenadas (x, y, z) para mover o piso

        
    
}
export function Piso(cena, cor, x, y, z,largura,altura) {
    const plane = new THREE.PlaneGeometry(largura, altura);
    var material = new THREE.MeshPhongMaterial({color: cor});
    const piso = new THREE.Mesh(plane, material);
    piso.receiveShadow = true;
    piso.rotation.x = Math.PI * -0.5;
    cena.add(piso);
    piso.position.set(x, y, z); // Ajuste as coordenadas (x, y, z) para mover o piso
}