import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { Letreiro,LetreiroAnimado } from './Letreiro.js';

export function PlacaLuminosa1(cena, cor, x, y, z, largura, altura, espessura,rotacao) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 0.3, metalness: 0.8 });

    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    //otacao, cena, cor, altura, largura, posX, posY, posZ, texto, tamanhoFonte, deslocamento
    LetreiroAnimado(rotacao,cena,0xEBE758,altura,largura-2.39,x-0.55,y-25.34,z-0.1,'./img/gelamais1.png',360,0.045)
    //cena, texturaURL, largura, altura, x, y, z, repeticoesX, repeticoesY
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
    //otacao, cena, cor, altura, largura, posX, posY, posZ, texto, tamanhoFonte, deslocamento
    LetreiroAnimado(rotacao,cena,0x2E2E33,altura,largura-2.39,x+0.55,y-25.34,z-0.1,'./img/megafome1.png',360,0.045)
    //cena, texturaURL, largura, altura, x, y, z, repeticoesX, repeticoesY
    CriarPlanoTextura(cena,'./img/pixels-escuro.jpg',largura-2.4,altura-4.5,x+0.54,y+1,z,1,1,rotacao)
    cena.add(cubo);
    cubo.position.set(x, y, z);
    cubo.receiveShadow = true;
    cubo.rotation.y = Math.PI * -rotacao;
    
}

export function Placa(cena,cor, x, y, z, largura, altura, espessura) {
    var geometria = new THREE.BoxGeometry(largura, altura, espessura);
    var material = new THREE.MeshStandardMaterial({ color: cor, roughness: 0.2, metalness: 0.8 });

    var cubo = new THREE.Mesh(geometria, material);
    cubo.castShadow = true;
    cubo.receiveShadow = true;
    cena.add(cubo);
    cubo.position.set(x, y, z);
}
function CriarPlano(cena,cor, largura, altura,x,y,z){
    var geometria = new THREE.PlaneGeometry(altura, largura);
    var material = new THREE.MeshPhongMaterial({color: cor, flatShading: true})
  
    const plano = new THREE.Mesh(geometria, material);
    cena.add(plano);
    plano.position.set(x, y, z);
    plano.rotation.x = Math.PI * -1;
    //plano.position.x = -5;
}
function CriarPlanoTextura(cena, texturaURL, largura, altura, x, y, z, repeticoesX, repeticoesY,rotacao) {
    const geometria = new THREE.PlaneGeometry(largura, altura, repeticoesX, repeticoesY);
    
    // Carregar a textura
    const textureLoader = new THREE.TextureLoader();
    const textura = textureLoader.load(texturaURL);
  
    // Ajustar as coordenadas de textura para cada vértice
    const numVertices = geometria.attributes.uv.count;
    const ajusteX = 1 / repeticoesX;
    const ajusteY = 1 / repeticoesY;
    
    for (let i = 0; i < numVertices; i++) {
      const uv = geometria.attributes.uv.array;
      uv[i * 2] *= ajusteX;
      uv[i * 2 + 1] *= ajusteY;
    }
    
    const material = new THREE.MeshStandardMaterial({ map: textura, flatShading: true, roughness: 0.2, metalness: 0.8 });
    const plano = new THREE.Mesh(geometria, material);
    
    cena.add(plano);
    plano.position.set(x, y, z);
    plano.rotation.y = Math.PI*-rotacao;
}