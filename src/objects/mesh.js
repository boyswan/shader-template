import { scene } from 'src/scene'

const fragmentShader = require('src/objects/shaders/fragment.glsl')
const vertexShader = require('src/objects/shaders/vertex.glsl')

const triangles = 1000;
const tri = triangles * 3 * 3
const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array(tri)
const colors = new Uint8Array(tri)

for ( let i = 0; i < tri; i += 1 ) {
  vertices[i] = Math.random() - 0.5;
  // vertices[i + 1] = 10 Math.random() - 0.5;
  // vertices[i + 2] = Math.random() - 0.5;
}

for ( let i = 0; i < tri; i += 9) {
  colors[i] = 155;
	// colors[i + 2] = 155;
}

geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3, true));

const uniforms =  {
  time: { type: 'f', value: 1.0 },
  mouse: { type: 'vec2', value: new THREE.Vector2(0, 0)}
}

const material = new THREE.RawShaderMaterial({
	uniforms,
	vertexShader,
	fragmentShader,
	side: THREE.DoubleSide,
	transparent: true
})

const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh)
export default mesh
