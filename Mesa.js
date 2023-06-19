import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const loader = new THREE.TextureLoader();
export function Mesa(cena, x, y, z, rotacaoX, tamanho) {
    const altura = 0.76 * tamanho; // Altura da mesa de ping pong (padrão: 0.76)
    const largura = 1.52 * tamanho; // Largura da mesa de ping pong (padrão: 1.52)
    const espessura = 0.05 * tamanho; // Espessura da mesa de ping pong (padrão: 0.05)
    var p = loader.load('./img/madeira-mesa.jpg');
    const mesaGeometria = new THREE.BoxGeometry(largura, espessura, altura);
    const mesaMaterial = new THREE.MeshStandardMaterial({ map: p ,roughness: 0.4, metalness: 0.2});
    const mesa = new THREE.Mesh(mesaGeometria, mesaMaterial);//234489
  
    mesa.position.set(x, y+5.5, z);
    mesa.rotation.x = rotacaoX;
    mesa.receiveShadow = true;
    cena.add(mesa)
    Cilindro(cena,new THREE.Color(0xFFB34D),6,6,8,x,y,z)
    //cena, cor, largura, altura, profundidade, posX, posY, posZ
    //cena, largura, altura, posX, posY, posZ,rotacao
    //PAREI AQUI!!!!!!
    EstruturaRede(cena,new THREE.Color(0xFFFFFF),0.2,altura-12,largura,0,-5.75,0)
    Rede(cena,0.7,5.6,-0.06,-6.7,0,0.5)
    Linha(cena,new THREE.Color(0xFFFFFF),[15, -5.75, 0], [-15, -5.75, 0])
    Tampo(cena,new THREE.Color(0x234489),tamanho-0.6,0,-5.8,0)
    Tampo(cena,new THREE.Color(0xFFFFFF),tamanho,0,-5.9,0)
  
}

export function Cilindro(cena, cor, raioCima, raioBaixo, altura, x, y, z) {
    var geometria = new THREE.CylinderGeometry(raioCima, raioBaixo, altura, 20);
    var p = loader.load('./img/madeira-mesa.jpg');
    var material = new THREE.MeshPhongMaterial({ map: p });
    var cilindro = new THREE.Mesh(geometria, material);
    cilindro.receiveShadow = true;
    cilindro.castShadow = true;
    cilindro.rotation.x = Math.PI / 2;
    cilindro.position.set(x, y, z);
    cena.add(cilindro);
}
export function Tampo(cena,cor, tamanho,x,y,z){
    const altura = 0.76 * tamanho; // Altura da mesa de ping pong (padrão: 0.76)
    const largura = 1.52 * tamanho;
    var geometria = new THREE.PlaneGeometry(altura, largura);
    var material = new THREE.MeshStandardMaterial({color: cor, roughness: 0.3, metalness: 0.2});
  
    var plano = new THREE.Mesh(geometria, material);
    plano.position.set(x, y, z);
    plano.rotation.x = Math.PI * -0.5;
    plano.rotation.z = Math.PI * -0.5;
    cena.add(plano)
}
export function Linha(cena, cor, pontoInicial, pontoFinal) {
    const material = new THREE.LineBasicMaterial({ color: cor });
  
    const pontos = [];
    pontos.push(new THREE.Vector3(...pontoInicial));
    pontos.push(new THREE.Vector3(...pontoFinal));
  
    const geometria = new THREE.BufferGeometry().setFromPoints(pontos);
  
    const linha = new THREE.Line(geometria, material);
    cena.add(linha);
}
export function EstruturaRede(cena, cor, largura, altura, profundidade, posX, posY, posZ) {
    var geometria = new THREE.BoxGeometry(largura, altura, profundidade);
    var material = new THREE.MeshPhongMaterial({ color: cor, flatShading: true });
  
    var cubo = new THREE.Mesh(geometria, material);
    cubo.position.set(posX, posY, posZ); // Define a posição x, y, z do cubo
    cena.add(cubo);
}
  
export function Rede(cena, largura, altura, posX, posY, posZ,rotacao){
    // Carregar a textura
    var geometria = new THREE.PlaneGeometry(largura, altura, 2, 2);
    const textureLoader = new THREE.TextureLoader();
    const textura = textureLoader.load('./img/gramado.jpg');
  
    // Ajustar as coordenadas de textura para cada vértice
    const numVertices = 10;
    const ajusteX = 1 / 10;
    const ajusteY = 1 / 20;
    
    for (let i = 0; i < numVertices; i++) {
      const uv = geometria.attributes.uv.array;
      uv[i * 2] *= ajusteX;
      uv[i * 2 + 1] *= ajusteY;
    }
    var geometria = new THREE.PlaneGeometry(altura, largura);
    var material = new THREE.MeshPhongMaterial({map: textura, flatShading: true})
  
    var plano = new THREE.Mesh(geometria, material);
    cena.add(plano);
    plano.position.set(posX, posY, posZ);
    plano.rotation.y = Math.PI * -rotacao;
}