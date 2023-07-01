import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function LuzPoint(cena, cor, intensidade, x, y, z) {
  Lampada(cena,cor,intensidade,-50, 39, 0,0.2,1)
  Lampada(cena,cor,intensidade,50, 39, 0,0.2,1)
  Lampada(cena,cor,intensidade,0, 39, -50,0.2,1)
  Lampada(cena,cor,intensidade,0, 39, 50,0.2,1)
  Lampada(cena,cor,intensidade,0, 39, 0,0.2,0)

}
function Lampada(cena, cor, intensidade, x, y, z, tamanho,op) {
  // Estrutura do lathe
  const points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
  }
  const geometry = new THREE.LatheGeometry(points);
  geometry.scale(tamanho, tamanho, tamanho); // Escala a geometria do LatheGeometry

  const material = new THREE.MeshStandardMaterial({ color: 0x000000, side: THREE.DoubleSide ,roughness: 0.8, metalness: 0.4});
  const lathe = new THREE.Mesh(geometry, material);
  lathe.position.set(x, y, z);
  lathe.rotation.x = Math.PI * -1;

  // Lâmpada principal
  var lampadaEsfera = new THREE.SphereGeometry(1.3, 32,32);
  var luz = new THREE.PointLight(0xffffff, 1.5, 100, 2);
  var lampada = new THREE.MeshStandardMaterial({
    emissive: 0xffffff,
    emissiveIntensity: intensidade * 2,
    color: 0xffffff,
    roughness: 1
  });

  luz.add(new THREE.Mesh(lampadaEsfera, lampada));
  luz.position.set(x, y, z);
  if (op == 1) {
    luz.castShadow = true;
  }
  
  const lampadaCompleta = new THREE.Object3D();
  lampadaCompleta.add(lathe);
  lampadaCompleta.add(luz);
  cena.add(lampadaCompleta);
}
