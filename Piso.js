import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import { PlacaLuminosa1,PlacaLuminosa2,Placa_Roxa,Placa_Azul } from './Placa.js';

const loader = new THREE.TextureLoader();
export function PisoPrincipal(cena, x, y, z,largura,altura) {
    const plane = new THREE.PlaneGeometry(largura, altura);
    var p = loader.load('./img/O5GLMS0.jpg');
    var material = new THREE.MeshStandardMaterial({ map: p, roughness: 0.6, metalness: 0.25});
    const piso = new THREE.Mesh(plane, material);
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(2, 2); //quantidade de repetições
  
    

    
    PlacaLuminosa1(cena,0x2E2E2E,50.6,-13.5,0,100,24,1,0.5);
    PlacaLuminosa2(cena,0x2E2E2E,-50.6,-13.5,0,100,24,1,1.5);
    Placa_Roxa(cena,0xFFFFb19,-25,-13.5,50.5,50,24,1,0.6,0)
    Placa_Azul(cena,0x3347FF,25,-13.5,50.5,50,24,1,0.6,0)
    Placa_Roxa(cena,0xFFFFb19,-25,-13.5,-50.5,50,24,1,-0.6,1)
    Placa_Azul(cena,0x3347FF,25,-13.5,-50.5,50,24,1,-0.6,1)
    piso.rotation.x = Math.PI * -0.5;
    piso.receiveShadow = true;
    cena.add(piso);
    piso.position.set(x, y, z); //posição do piso
    Logotipo(cena,x,y+0.05,z+35,30,30,-1)
    Logotipo(cena,x,y+0.05,z-35,30,30,2)
    Logotipo(cena,x+35,y+0.05,z,30,30,-4.5)
    Logotipo(cena,x-35,y+0.05,z,30,30,-3.5)

        
    
}
export function Piso(cena, cor, x, y, z,largura,altura) {
    const plane = new THREE.BoxGeometry(largura, altura,15);
    var material = new THREE.MeshPhongMaterial({color: cor});
    const piso = new THREE.Mesh(plane, material);
    piso.receiveShadow = true;
    piso.rotation.x = Math.PI * -0.5;
    cena.add(piso);
    Arquibancada1(cena,x-82,y,z,-0.5)
    Arquibancada1(cena,x+82,y,z,-1.5)
    Arquibancada2(cena,x,y,z,1)
    piso.position.set(x, y, z); //ajustando as coordenadas (x, y, z) ppra mover o piso
}
function Logotipo(cena, x, y, z,largura,altura,z1){
    const plane = new THREE.PlaneGeometry(largura, altura);
    var p = loader.load('./img/campeonato-s.png');
    var material = new THREE.MeshStandardMaterial({ map: p, side: THREE.DoubleSide,transparent: true , opacity:0.9, roughness: 1, metalness: 0.4});
    const piso = new THREE.Mesh(plane, material);
    piso.position.set(x, y, z);
    piso.rotation.x = Math.PI * -0.5;
    piso.rotation.z = Math.PI*z1;
    cena.add(piso);
}

export function Arquibancada1(cena, x, y, z, angulo){
    const n1 = new THREE.BoxGeometry(120, 5,7);
    const n2 = new THREE.BoxGeometry(120,10,7);
    const n3 = new THREE.BoxGeometry(120,15,7);
    var material = new THREE.MeshPhongMaterial({color: new THREE.Color(0xFFB34D),roughness: 0.7, metalness: 0.5});
    const nivel1 = new THREE.Mesh(n1, material);
    nivel1.position.y = y-10.5
    nivel1.position.z = z
    const nivel2 = new THREE.Mesh(n2, material);
    nivel2.position.y = y-7.5
    nivel2.position.z = z+6
    const nivel3 = new THREE.Mesh(n3, material);
    nivel3.position.y = y-5
    nivel3.position.z = z+12
    const arquibancada = new THREE.Object3D();
    arquibancada.add(nivel1);
    arquibancada.add(nivel2);
    arquibancada.add(nivel3);
    
    arquibancada.position.set(x, y+41, z);
    arquibancada.receiveShadow = true;
    arquibancada.castShadow = true;
    //arquibancada.rotation.x = Math.PI / -4 * vz;
    //arquibancada.rotation.z = Math.PI / -8 * (vz/1.5);
    arquibancada.rotation.y = Math.PI*angulo;
      
    cena.add(arquibancada);
  }
  export function Arquibancada2(cena, x, y, z, angulo){
    const n1 = new THREE.BoxGeometry(120, 5,7);
    const n2 = new THREE.BoxGeometry(120,10,7);
    const n3 = new THREE.BoxGeometry(120,15,7);
    var material = new THREE.MeshPhongMaterial({color: new THREE.Color(0xFFB34D),roughness: 0.7, metalness: 0.5});
    const nivel1 = new THREE.Mesh(n1, material);
    nivel1.position.y = y-10.5
    nivel1.position.z = z
    const nivel2 = new THREE.Mesh(n2, material);
    nivel2.position.y = y-7.5
    nivel2.position.z = z+6
    const nivel3 = new THREE.Mesh(n3, material);
    nivel3.position.y = y-5
    nivel3.position.z = z+12
    const arquibancada = new THREE.Object3D();
    arquibancada.add(nivel1);
    arquibancada.add(nivel2);
    arquibancada.add(nivel3);
    
    arquibancada.position.set(x, y+41, z-82);
    arquibancada.receiveShadow = true;
    arquibancada.castShadow = true;
    //arquibancada.rotation.x = Math.PI / -4 * vz;
    //arquibancada.rotation.z = Math.PI / -8 * (vz/1.5);
    arquibancada.rotation.y = Math.PI*angulo;
      
    cena.add(arquibancada);
  }