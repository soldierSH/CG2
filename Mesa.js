import * as THREE from 'https://unpkg.com/three/build/three.module.js';
const loader = new THREE.TextureLoader();
export function Mesa(cena, x, y, z, rotacaoX, tamanho) {
    const altura = 0.76 * tamanho; // Altura da mesa de ping pong (padrão: 0.76)
    const largura = 1.52 * tamanho; // Largura da mesa de ping pong (padrão: 1.52)
    const espessura = 0.03 * tamanho; // Espessura da mesa de ping pong (padrão: 0.05)
    var p = loader.load('./img/madeiramesa1.png');
    const mesaGeometria = new THREE.BoxGeometry(largura, espessura, altura);
    const mesaMaterial = new THREE.MeshStandardMaterial({ map: p ,roughness: 0.4, metalness: 0.2});
    const mesa = new THREE.Mesh(mesaGeometria, mesaMaterial);//234489
  
    mesa.position.set(x, y+5.7, z);
    mesa.rotation.x = rotacaoX;
    mesa.receiveShadow = true;
    cena.add(mesa)
    Cilindro(cena,new THREE.Color(0xFFB34D),6,6,8,x,y,z)
    //cena, cor, largura, altura, profundidade, posX, posY, posZ
    
    //PAREI AQUI!!!!!!
    EstruturaRede(cena,new THREE.Color(0xFFFFFF),0.3,altura-13,largura-14.5,0,-5.7,0)
    //cena, largura, altura, posX, posY, posZ,rotacao
    Rede(cena,1.2,14.6,-0.17,-5.3,0,0.5)
    Rede(cena,1.2,14.6,0.17,-5.3,0,1.5)
    Linha(cena,new THREE.Color(0xFFFFFF),[15, -5.88, 0], [-15, -5.88, 0])
    Tampo(cena,new THREE.Color(0x234489),tamanho-0.6,0,-5.9,0)
    Tampo(cena,new THREE.Color(0xFFFFFF),tamanho,0,-5.95,0)
  
}

export function Cilindro(cena, cor, raioCima, raioBaixo, altura, x, y, z) {
    var geometria = new THREE.CylinderGeometry(raioCima, raioBaixo, altura, 20);
    var p = loader.load('./img/madeiramesa1.png');
    var material = new THREE.MeshPhongMaterial({ map: p });
    var cilindro = new THREE.Mesh(geometria, material);
    cilindro.receiveShadow = true;
    cilindro.castShadow = true;
    cilindro.rotation.x = Math.PI / 2;
    cilindro.position.set(x, y, z);
    cena.add(cilindro);
}
export function Tampo(cena,cor, tamanho,x,y,z){
    const altura = 0.76 * tamanho;
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
    const textura = textureLoader.load('./img/rede.jpg');
  
   textura.wrapS = THREE.RepeatWrapping; // Repetição horizontal
   textura.wrapT = THREE.RepeatWrapping; // Repetição vertical
   textura.repeat.set(10, 2); // Define a quantidade de repetições
    var geometria = new THREE.PlaneGeometry(altura, largura);
    var material = new THREE.MeshPhongMaterial({map: textura, flatShading: true,opacity:0.9})
  
    var plano = new THREE.Mesh(geometria, material);
    cena.add(plano);
    plano.position.set(posX, posY, posZ);
    plano.rotation.y = Math.PI * -rotacao;
}