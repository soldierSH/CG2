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
                                    //x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
    Bezier(cena,camera,renderer,bola,-18,-2,2,-15.6,-1.5,2,0,-2.5,4,6,-5.5,4)
    Bezier(cena,camera,renderer,bola,6,-5.5,4,4,-1.5,2,8,-2.5,4,10,-1,0)
}

export function Bezier(cena,camera,renderer, bola,x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
    const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(x1, y1, z1),new THREE.Vector3(x2, y2, z2),
        new THREE.Vector3(x3, y3, z3),new THREE.Vector3(x4, y4, z4)
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xFFFFFF) });
    const curveObject = new THREE.Line(geometry, material);
    cena.add(curveObject);
    let t = 0.1; // Parâmetro de tempo
    function animate() {
        requestAnimationFrame(animate);
    
        // Atualiza a posição da bola ao longo da curva de Bezier
        const position = curve.getPointAt(t);
        bola.position.copy(position);
    
        // Atualiza o parâmetro de tempo
        t += 0.01; // Ajuste a velocidade da animação alterando o valor aqui
    
        // Reinicia o parâmetro de tempo para criar um loop contínuo
    
        // Renderiza a cena
        renderer.render(cena, camera);
    }
    animate()
    
}