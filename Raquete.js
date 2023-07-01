import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const loader = new THREE.TextureLoader();
export function Raquete(cena,camera,renderer,cor, x, y, z,vz) {

  const cabo = Cabo(cena,0.1,0.1,1.3,32)
  const cabeca = Cabeca(cena,cor,1,0.6,32)

  meshRaquete(cena,camera,renderer,cabo,cabeca,x,y,z,vz)
}
export function meshRaquete(cena, camera, renderer, cabo, cabeca, x, y, z, vz){
  const raquete = new THREE.Object3D();
  raquete.add(cabo);
  raquete.add(cabeca);
  
  raquete.position.set(x, y, z);
  raquete.receiveShadow = true;
  raquete.castShadow = true;
  raquete.rotation.x = Math.PI / -4 * vz;
  raquete.rotation.z = Math.PI / -8 * (vz/1.5);
    
  cena.add(raquete);
}
export function Cabo(cena,topo,base,altura,segmentos){
    const geometriaCilindro = new THREE.CylinderGeometry(topo, base, altura, segmentos);
    geometriaCilindro.scale(0.55,1,1)
    var p = loader.load('./img/madeira-cabo.jpg');
    const materialCilindro = new THREE.MeshStandardMaterial({ map: p});
    const cilindroAchatado = new THREE.Mesh(geometriaCilindro, materialCilindro);
    cilindroAchatado.receiveShadow = true;
    cilindroAchatado.castShadow = true;
    return cilindroAchatado
}
export function Cabeca(cena,cor,raio,altura,segmentos){
    const geometriaCabeca = new THREE.CylinderGeometry(raio,raio, altura, segmentos);
    geometriaCabeca.scale(1,0.25,1)
    //var p = loader.load('./img/madeira-cabo.jpg');
    const materialCabeca = new THREE.MeshStandardMaterial({ color: cor});
    const CabecaAchatada = new THREE.Mesh(geometriaCabeca, materialCabeca);
    CabecaAchatada.position.set(0, 1.4, 0);
    CabecaAchatada.receiveShadow = true;
    CabecaAchatada.castShadow = true;
    const angulo = Math.PI / 2;
    CabecaAchatada.rotation.z = angulo; 
    return CabecaAchatada
}