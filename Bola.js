import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function Bola(cena,camera,renderer, x, y, z,tam, textura,face) {
    const raio = 0.2*tam;
    var p = loader.load(textura);

    const geometria = new THREE.SphereGeometry(raio, tam*face, tam*face);
    const material = new THREE.MeshStandardMaterial({ map: p ,flatShading: true, roughness: 0.8, metalness: 0.2});

    const bola = new THREE.Mesh(geometria, material);
    bola.position.set(x, y, z);
    bola.receiveShadow = true;
    bola.castShadow = true;

    cena.add(bola);
    
    Bezier(cena,camera,renderer,bola)
function Bezier(cena, camera, renderer, bola) {
  const curvas = [
    { // Primeira curva
      x1: -18, y1: -2.5, z1: 2,
      x2: -15.6, y2: -1.5, z2: 2,
      x3: 0, y3: -2.5, z3: 4,
      x4: 6, y4: -5.7, z4: 4
    },
    { // Segunda curva
      x1: 6, y1: -5.7, z1: 4,
      x2: 8, y2: -3.5, z2: 2.5,
      x3: 8, y3: -2.5, z3: 2,
      x4: 16, y4: -1, z4: 1
    },
    { // Terceira curva
      x1: 16, y1: -1, z1: 1,
      x2: 8, y2: 0, z2: 1.5,
      x3: 4, y3: -1, z3: 2,
      x4: -8, y4: -5.7, z4: 1
    },
    { // Quarta curva
      x1: -8, y1: -5.7, z1: 1,
      x2: -10, y2: -2, z2: 1.5,
      x3: -14, y3: -1.5, z3: 2,
      x4: -18, y4: -2.5, z4: 2
    }
  ];

  let indiceCurva = 0;
  let t = 0.1; // Parâmetro de tempo
  const maxT = 1; // Valor máximo do parâmetro de tempo

  function animate() {
    requestAnimationFrame(animate);

    const valorCurvas = curvas[indiceCurva];

    // Cria a curva de Bezier atual
    const curva = new THREE.CubicBezierCurve3(
      new THREE.Vector3(valorCurvas.x1, valorCurvas.y1, valorCurvas.z1),
      new THREE.Vector3(valorCurvas.x2, valorCurvas.y2, valorCurvas.z2),
      new THREE.Vector3(valorCurvas.x3, valorCurvas.y3, valorCurvas.z3),
      new THREE.Vector3(valorCurvas.x4, valorCurvas.y4, valorCurvas.z4)
    );

    // Obtém os pontos ao longo da curva
    const points = curva.getPoints(50);

    // Cria a geometria da curva
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Cria o material da curva
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(0xA6A19A),opacity:0.01,transparent:true});

    // Remove a curva anterior, se existir
    if (cena.getObjectByName('objCurva')) {
      cena.remove(cena.getObjectByName('objCurva'));
    }

    // Adiciona a nova curva à cena
    const objCurva = new THREE.Line(geometry, material);
    objCurva.name = 'objCurva';
    cena.add(objCurva);

    // Atualiza a posição da bola ao longo da curva de Bezier
    const position = curva.getPointAt(t);
    bola.position.copy(position);
    bola.rotation.z -= 0.03;
    bola.rotation.y += 0.02;

    // Atualiza o parâmetro de tempo
    t += 0.15; // Ajuste a velocidade da animação alterando o valor aqui

    // Verifica se o parâmetro de tempo atingiu o valor máximo
    if (t > maxT) {
      t = 0.08; // Reinicia o parâmetro de tempo

      // Passa para a próxima curva
      indiceCurva++;
      if (indiceCurva >= curvas.length) {
        indiceCurva = 0; // Volta para a primeira curva
      }
    }

    // Renderiza a cena
    renderer.render(cena, camera);
  }

  animate();
}
}