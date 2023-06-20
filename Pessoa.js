import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function Pessoa(cena,cor,x,y,z){
    // Geometria dos sapatos
  const geometry = new THREE.BoxGeometry(5, 2, 10);
  const material = new THREE.MeshPhongMaterial({ color: cor });
  const sapato = new THREE.Mesh(geometry, material);
  sapato.position.set(x, y, z);
  cena.add(sapato);
}