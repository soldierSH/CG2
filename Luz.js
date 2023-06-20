import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export function LuzPoint(cena, cor, intensidade, x, y, z) {
  const light = new THREE.DirectionalLight(cor, intensidade);
  light.position.set(x, y, z);
  light.target.position.set(0, 1, 0);
  light.castShadow = true;

  // configure directional light camera
  light.shadow.camera.zoom = 0.1;

  //const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  //cena.add(cameraHelper);
  const luzPontual1 = new THREE.PointLight(cor, intensidade);
  luzPontual1.position.set(-50, -7.5, 0); // Posição da primeira lâmpada
  luzPontual1.castShadow = true
  luzPontual1.intensity = intensidade;
  luzPontual1.shadow.camera.zoom = 1;
  luzPontual1.shadow.mapSize.width = 2024;
  luzPontual1.shadow.mapSize.height = 2024;
  cena.add(luzPontual1);
  cena.add(luzPontual1.target)

  const luzPontual2 = new THREE.PointLight(cor, intensidade);
  luzPontual2.position.set(50, -7.5, 0); // Posição da segunda lâmpada
  luzPontual2.castShadow = true
  luzPontual2.intensity = intensidade;
  luzPontual2.shadow.camera.zoom = 1;
  luzPontual2.shadow.mapSize.width = 2030;
  luzPontual2.shadow.mapSize.height = 2024;
  cena.add(luzPontual2);
  //const luzAmbiente = new THREE.AmbientLight(0x404040, 0.2);
  
  const luzPontual3 = new THREE.PointLight(cor, intensidade);
  luzPontual3.position.set(0, -7.5, -50); // Posição da segunda lâmpada
  luzPontual3.castShadow = true
  luzPontual3.intensity = intensidade;
  luzPontual3.shadow.camera.zoom = 1;
  luzPontual3.shadow.mapSize.width = 2024;
  luzPontual3.shadow.mapSize.height = 2024;
  cena.add(luzPontual3);

  const luzPontual4 = new THREE.PointLight(cor, intensidade);
  luzPontual4.position.set(0, -7.5, 50); // Posição da segunda lâmpada
  luzPontual4.castShadow = true
  luzPontual4.intensity = intensidade;
  luzPontual4.shadow.camera.zoom = 1;
  luzPontual4.shadow.mapSize.width = 2024;
  luzPontual4.shadow.mapSize.height = 2024;
  cena.add(luzPontual4);

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