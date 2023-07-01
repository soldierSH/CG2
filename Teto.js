import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function Teto(cena, x, y, z, rotacaoX, tamanho) {
    const altura = tamanho; // Altura da mesa de ping pong (padrão: 0.76)
    const largura = tamanho; // Largura da mesa de ping pong (padrão: 1.52)
    const espessura = 0.03 * tamanho; // Espessura da mesa de ping pong (padrão: 0.05)
    var p = loader.load('./img/J4sRbA4.jpg');
    const mesaGeometria = new THREE.BoxGeometry(largura, espessura, altura);
    const mesaMaterial = new THREE.MeshStandardMaterial({ map: p ,roughness: 0.8, metalness: 0.2});
    const mesa = new THREE.Mesh(mesaGeometria, mesaMaterial);//234489
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(4, 4); //quantidade de repetições
    mesa.position.set(x, y+5.7, z);
    //mesa.rotation.x = rotacaoX;
    cena.add(mesa)
    Parede_Entrada(cena,x,y-25,z+100,200,60,2,1)
    Parede(cena,x,y-25,z-100,200,60,2,1)
    Parede(cena,x-100,y-25,z,200,60,2,1.5)
    Parede(cena,x+100,y-25,z,200,60,2,1.5)
  
}
export function Parede_Entrada(cena, x, y, z, largura, altura, espessura,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var p = loader.load('./img/parede-lilas-s.jpg');
    var material = new THREE.MeshStandardMaterial({ map: p, roughness: 1, metalness: 0.8 });
    
    var cubo = new THREE.Mesh(geometria, material);
    //cubo.castShadow = true;
    //cubo.receiveShadow = true;
    cena.add(cubo);
    cubo.position.set(x, y, z);

    // Adicionar um plano na face do retângulo
    var planoGeometria = new THREE.PlaneGeometry(24,28);
    var porta = loader.load('./img/porta-s.jpg');
    var planoMaterial = new THREE.MeshStandardMaterial({ map: porta,side: THREE.DoubleSide ,roughness: 0.6, metalness: 0.4});
    var plano1 = new THREE.Mesh(planoGeometria, planoMaterial);
    var plano2 = new THREE.Mesh(planoGeometria, planoMaterial);
    var plano3 = new THREE.Mesh(planoGeometria, planoMaterial);
    //plano.receiveShadow = true;
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(12, 6); //quantidade de repetições
    
    //plano.position.copy(cubo.position);
    //plano.position.set(x,0,z-30)
    cubo.rotation.y = Math.PI*rotacao;
    plano1.position.y = y-16
    plano1.position.z = z-1.2
    plano1.position.x = 50
    plano2.position.y = y-16
    plano2.position.z = z-1.2
    plano2.position.x = -50
    plano3.position.y = y-16
    plano3.position.z = z-1.2
    cena.add(plano1);
    cena.add(plano2);
    cena.add(plano3);
    
}
export function Parede(cena, x, y, z, largura, altura, espessura,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var p = loader.load('./img/parede-lilas-s.jpg');
    var material = new THREE.MeshStandardMaterial({ map: p, roughness: 1, metalness: 0.8 });
    
    var cubo = new THREE.Mesh(geometria, material);
    cena.add(cubo);
    cubo.position.set(x, y, z);

    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(12, 6); //quantidade de repetições
    cubo.rotation.y = Math.PI*rotacao;
    
}