import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { LetreiroAnimado } from './Letreiro.js';

const loader = new THREE.TextureLoader();
export function PlacaLuminosa1(cena, cor, x, y, z, largura, altura, espessura,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 0.3, metalness: 0.8 });

    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    LetreiroAnimado(rotacao,cena,0xEBE758,altura,largura-2.39,x-0.55,y-1,z-0.1,'./img/gelamais1.png',360,0.3)
    CriarPlanoTextura(cena,'./img/pixels-escuro.jpg',largura-2.4,altura-4.5,x-0.54,y+1,z,1,1,rotacao)
    cena.add(cubo);
    cubo.position.set(x, y, z);
    cubo.receiveShadow = true;
    cubo.rotation.y = Math.PI * -rotacao;
    
}
export function PlacaLuminosa2(cena, cor, x, y, z, largura, altura, espessura,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 0.3, metalness: 0.8 });

    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    LetreiroAnimado(rotacao,cena,0x2E2E33,altura,largura-2.39,x+0.55,y-1,z-0.1,'./img/megafome1.png',360,0.3)
    CriarPlanoTextura(cena,'./img/pixels-escuro.jpg',largura-2.4,altura-4.5,x+0.54,y+1,z,1,1,rotacao)
    cena.add(cubo);
    cubo.position.set(x, y, z);
    cubo.receiveShadow = true;
    cubo.rotation.y = Math.PI * -rotacao;
    
}

export function Placa_Roxa(cena,cor, x, y, z, largura, altura, espessura,z1,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 1, metalness: 0.8 });
    var p = loader.load('./img/tenis-s.png');
    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    cena.add(cubo);
    cubo.position.set(x, y, z);

    // Adicionar um plano na face do retângulo
    var planoGeometria = new THREE.PlaneGeometry(42,12);
    var planoMaterial = new THREE.MeshStandardMaterial({ map: p,side: THREE.DoubleSide,transparent: true ,roughness: 0.6, metalness: 0.4});
    var plano = new THREE.Mesh(planoGeometria, planoMaterial);
    
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    //p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(4, 1); //quantidade de repetições
    
    
    if (rotacao == 0) {
        plano.rotation.y = Math.PI*-1;
    }
    plano.position.set(x,y+6,z-z1)
    
    cena.add(plano);
}
export function Placa_Azul(cena,cor, x, y, z, largura, altura, espessura,z1,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 1, metalness: 0.8 });
    var p = loader.load('./img/caraforte-s.png');
    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    cena.add(cubo);
    cubo.position.set(x, y, z);

    // Adicionar um plano na face do retângulo
    var planoGeometria = new THREE.PlaneGeometry(46,16);
    var planoMaterial = new THREE.MeshStandardMaterial({ map: p,side: THREE.DoubleSide,transparent: true ,roughness: 0.6, metalness: 0.4});
    var plano = new THREE.Mesh(planoGeometria, planoMaterial);
    //plano.receiveShadow = true;
    p.wrapS = THREE.RepeatWrapping; // Repetição horizontal
    //p.wrapT = THREE.RepeatWrapping; // Repetição vertical
    p.repeat.set(4, 1); //quantidade de repetições
    
    //plano.position.copy(cubo.position);
    if (rotacao == 0) {
        plano.rotation.y = Math.PI*-1;
    }
    plano.position.set(x,y+6,z-z1) // Ajuste a posição do plano conforme necessário
    cena.add(plano);
}
function CriarPlanoTextura(cena, texturaURL, largura, altura, x, y, z, repeticoesX, repeticoesY,rotacao) {
    const geometria = new THREE.PlaneGeometry(largura, altura, repeticoesX, repeticoesY);
    
    // Carregar a textura
    const textureLoader = new THREE.TextureLoader();
    const textura = textureLoader.load(texturaURL);
    
    const material = new THREE.MeshStandardMaterial({ map: textura, flatShading: true, roughness: 0.2, metalness: 0.8 });
    const plano = new THREE.Mesh(geometria, material);
    
    cena.add(plano);
    plano.position.set(x, y, z);
    plano.rotation.y = Math.PI*-rotacao;
}