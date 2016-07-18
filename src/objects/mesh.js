import { scene } from 'src/scene'
import { move } from 'src/materials'

const tri = 1000 * 3 * 3

const vertices = new Float32Array(tri)
for ( let i = 0; i < tri; i += 1 ) {
  vertices[i] = Math.random() - 0.5;
}

const colors = new Uint8Array(tri)
for ( let i = 0; i < tri; i += 9) {
  colors[i] = 155;
}


const geometry = new THREE.BufferGeometry();
geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3, true));

const mesh = new THREE.Mesh( geometry, move );
scene.add(mesh)
export default mesh
