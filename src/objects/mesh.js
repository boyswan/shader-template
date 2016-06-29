import { scene } from 'src/scene'

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

const material = new THREE.RawShaderMaterial({
	uniforms: {
    time: { type: 'f', value: 1.0 },
    mouse: { type: 'vec2', value: new THREE.Vector2(0, 0) }
  },
	vertexShader: require('src/shaders/vertex.glsl'),
	fragmentShader: require('src/shaders/fragment.glsl'),
	side: THREE.DoubleSide,
	transparent: true
})

const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh)
export default mesh
