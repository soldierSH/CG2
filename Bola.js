import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const loader = new THREE.TextureLoader();
export function BolaPingPong(cena,camera,renderer, x, y, z,tam, textura,face) {
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
}

export function Bezier(cena,camera,renderer, bola){
    const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(-10, 0, 0),new THREE.Vector3(-5, 15, 0),
        new THREE.Vector3(20, 15, 0),new THREE.Vector3(10, 0, 0)
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x000000) });
    const curveObject = new THREE.Line(geometry, material);
    cena.add(curveObject);
    let t = 0; // Parâmetro de tempo
    function animate() {
        requestAnimationFrame(animate);
    
        // Atualiza a posição da bola ao longo da curva de Bezier
        const position = curve.getPointAt(t);
        bola.position.copy(position);
    
        // Atualiza o parâmetro de tempo
        t += 0.005; // Ajuste a velocidade da animação alterando o valor aqui
    
        // Reinicia o parâmetro de tempo para criar um loop contínuo
        if (t > 1) {
          t = 0;
        }
    
        // Renderiza a cena
        renderer.render(cena, camera);
    }
    animate()
    
}