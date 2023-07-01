import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function LuzPoint(cena, cor, intensidade, x, y, z) {
  Lampada(cena,cor,intensidade,-50, 39, 0,0.2)
  Lampada(cena,cor,intensidade,50, 39, 0,0.2)
  Lampada(cena,cor,intensidade,0, 39, -50,0.2)
  Lampada(cena,cor,intensidade,0, 39, 50,0.2)
  Lampada(cena,cor,intensidade,0, 39, 0,0.2)

}
export function LuzDirecional(cena,cor, intensidade,x,y,z){
  const luzDirecional = new THREE.DirectionalLight(cor, intensidade);
  luzDirecional.position.set(x,y,z);
  luzDirecional.distance = 20
  luzDirecional.castShadow = true; // Habilita sombras
  // Configuração da câmera de sombra
  luzDirecional.shadow.camera.near = 0.5; // Distância mínima em que a câmera de sombra enxerga
  luzDirecional.shadow.camera.far = 50; // Distância máxima em que a câmera de sombra enxerga
  luzDirecional.shadow.camera.left = -10; // Limite esquerdo da câmera de sombra
  luzDirecional.shadow.camera.right = 10; // Limite direito da câmera de sombra
  luzDirecional.shadow.camera.top = 10; // Limite superior da câmera de sombra
  luzDirecional.shadow.camera.bottom = -10; // Limite inferior da câmera de sombra

  // Configuração do mapa de sombras
  luzDirecional.shadow.mapSize.width = 1024; // Largura do mapa de sombras
  luzDirecional.shadow.mapSize.height = 1024; // Altura do mapa de sombras
  cena.add(luzDirecional);
}
function Lampada(cena, cor, intensidade, x, y, z, tamanho) {
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
  luz.castShadow = true;
  const lampadaCompleta = new THREE.Object3D();
  lampadaCompleta.add(lathe);
  lampadaCompleta.add(luz);
  cena.add(lampadaCompleta);
}
