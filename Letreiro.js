import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function LetreiroAnimado(rotacao, cena, cor, altura, largura, posX, posY, posZ, texto, tamanhoFonte, deslocamento) {
  const espessura = 0.2;
  var p = loader.load(texto);
  const materialTexto = new THREE.MeshStandardMaterial({ map: p, transparent: true , opacity:0.75, roughness: 0.3, metalness: 0.8});
  const textoMesh = new THREE.Mesh(new THREE.PlaneGeometry(largura - 0.1, altura - 0.1), materialTexto);
  textoMesh.position.set(posX, posY, posZ + espessura / 2 + 0.01); // Ajuste a posição do texto para ficar na face da placa
  textoMesh.rotation.y = Math.PI * -rotacao;
  cena.add(textoMesh);

  let offsetY = altura;
  const animationSpeed = deslocamento;
  const pauseDuration = 6000; // 4 segundos de pausa
  let direction = -1; // Inicialmente, o letreiro desce

  function animateLetreiro() {
    if (direction === -1) {
      // Deslocamento para cima
      offsetY += animationSpeed;

      if (offsetY >= altura) {
        
        direction = 0; // Pausar a animação
        setTimeout(() => {
          direction = 1;
        }, pauseDuration);
      }
    } else if (direction === 1) {
      
      setTimeout(() => {
        direction = -1;
      }, pauseDuration);

      // Deslocamento para baixo
      offsetY -= animationSpeed;

      if (offsetY <= 0) {
        direction = 0; // Pausar a animação
        setTimeout(() => {
          direction = 1;
        }, pauseDuration);
      }
    }

    textoMesh.position.y = posY + offsetY;

    requestAnimationFrame(animateLetreiro);
  }

  //animateLetreiro();
}