import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function BolaPingPong(cena, x, y, z,tam, textura) {
    const raio = 0.02*tam;
    var p = loader.load(textura);

    const geometria = new THREE.SphereGeometry(raio, 32, 32);
    const material = new THREE.MeshStandardMaterial({ map: textura });

    const bola = new THREE.Mesh(geometria, material);
    bola.position.set(x, y, z);
    bola.receiveShadow = true;
    bola.castShadow = true;

    cena.add(bola);
}
