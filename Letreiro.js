import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function Letreiro(rotacao,cena, cor, altura, largura, posX, posY, posZ, texto,tamanhoFonte) {
  const espessura = 0.2;
  const textura = createTextTexture(texto, largura - 0.1, altura - 0.1,tamanhoFonte);
  const materialTexto = new THREE.MeshBasicMaterial({ map: textura, transparent: true });
  const textoMesh = new THREE.Mesh(new THREE.PlaneGeometry(largura - 0.1, altura - 0.1), materialTexto);
  textoMesh.position.set(posX, posY, posZ + espessura / 2 + 0.01); // Ajuste a posição do texto para ficar na face da placa
  textoMesh.rotation.y = Math.PI * -rotacao;
  cena.add(textoMesh);
}
export function Letras(rotacao,cena, cor, altura, largura, posX, posY, posZ, texto,tamanhoFonte) {
    const espessura = 0.2;
    const textura = createTextTexture(texto, largura - 0.1, altura - 0.1,tamanhoFonte);
    const materialTexto = new THREE.MeshBasicMaterial({ map: textura, transparent: true });
    const textoMesh = new THREE.Mesh(new THREE.PlaneGeometry(largura - 0.1, altura - 0.1), materialTexto);
    textoMesh.position.set(posX, posY, posZ + espessura / 2 + 0.01); // Ajuste a posição do texto para ficar na face da placa
    textoMesh.rotation.y = Math.PI * -rotacao;
    cena.add(textoMesh);
    
  }
export function createTextTexture(texto, largura, altura,tamanhoFonte) {
  const canvas = document.createElement('canvas');
  canvas.width = largura * 100;
  canvas.height = altura * 100;
  const contexto = canvas.getContext('2d');

  // Configurar o estilo do texto
  contexto.font = `bold ${tamanhoFonte}px Arial`;
  contexto.textAlign = 'center';
  contexto.textBaseline = 'middle';

  // Gradiente para efeito de pixels luminosos
  const gradiente = contexto.createLinearGradient(0, 0, 0, altura * 100);
  gradiente.addColorStop(0, '#FFFFFF');
  gradiente.addColorStop(0.5, '#FFFB19');
  gradiente.addColorStop(1, '#FFFFFF');

  // Preencher o texto com o gradiente
  contexto.fillStyle = gradiente;
  contexto.fillText(texto, largura * 50, altura * 50);

  // Criar a textura a partir do canvas
  const textura = new THREE.Texture(canvas);
  textura.needsUpdate = true;

  return textura;
}
export function LetreiroAnimado(rotacao, cena, cor, altura, largura, posX, posY, posZ, texto, tamanhoFonte, deslocamento) {
  const espessura = 0.2;
  var p = loader.load(texto);
  const materialTexto = new THREE.MeshStandardMaterial({ map: p, transparent: true , opacity:0.75, roughness: 0.3, metalness: 0.8});
  const textoMesh = new THREE.Mesh(new THREE.PlaneGeometry(largura - 0.1, altura - 0.1), materialTexto);
  textoMesh.position.set(posX, posY, posZ + espessura / 2 + 0.01); // Ajuste a posição do texto para ficar na face da placa
  textoMesh.rotation.y = Math.PI * -rotacao;
  cena.add(textoMesh);

  let offsetY = altura;
  const animationSpeed = deslocamento+0.02;
  const pauseDuration = 6000; // 4 segundos de pausa
  let direction = -1; // Inicialmente, o letreiro desce

  function animateLetreiro() {
    if (direction === -1) {
      // Deslocamento para cima
      offsetY += animationSpeed;

      if (offsetY >= altura) {
        
        direction = 0; // Pausar a animação
        setTimeout(() => {
          direction = 1; // Iniciar deslocamento para baixo após a pausa de 4 segundos
        }, pauseDuration);
      }
    } else if (direction === 1) {
      // Pausa por 4 segundos antes de iniciar a descida
      setTimeout(() => {
        direction = -1; // Iniciar deslocamento para cima após a pausa de 4 segundos
      }, pauseDuration);

      // Deslocamento para baixo
      offsetY -= animationSpeed;

      if (offsetY <= 0) {
        // O letreiro atingiu a posição final de parada
        direction = 0; // Pausar a animação
        setTimeout(() => {
          direction = 1; // Iniciar deslocamento para baixo após a pausa de 4 segundos
        }, pauseDuration);
      }
    }

    textoMesh.position.y = posY + offsetY;

    requestAnimationFrame(animateLetreiro);
  }

  animateLetreiro();
}