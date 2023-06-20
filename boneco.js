import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function createBoneco(escala) {
  // Criação dos materiais
  const corpoMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  const cabecaMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  const pernaMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

  // Criação dos geometrias
  const corpoGeometria = new THREE.BoxGeometry(1, 2, 0.5);
  const cabecaGeometria = new THREE.SphereGeometry(0.5);
  const pernaGeometria = new THREE.BoxGeometry(0.5, 1.5, 0.5);

  // Aplicação da escala
  corpoGeometria.scale(escala, escala, escala);
  cabecaGeometria.scale(escala, escala, escala);
  pernaGeometria.scale(escala, escala, escala);

  // Criação dos meshes
  const corpo = new THREE.Mesh(corpoGeometria, corpoMaterial);
  const cabeca = new THREE.Mesh(cabecaGeometria, cabecaMaterial);
  const pernaEsquerda = new THREE.Mesh(pernaGeometria, pernaMaterial);
  const pernaDireita = new THREE.Mesh(pernaGeometria, pernaMaterial);

  // Posicionamento dos meshes
  cabeca.position.y = 1.5 * escala;
  pernaEsquerda.position.set(-0.3 * escala, -1.5 * escala, 0);
  pernaDireita.position.set(0.3 * escala, -1.5 * escala, 0);

  // Criação do grupo para o boneco completo
  const boneco = new THREE.Group();
  boneco.add(corpo, cabeca, pernaEsquerda, pernaDireita);

  return boneco;
}