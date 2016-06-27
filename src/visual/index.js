import THREE from 'three'
import { scene } from 'src/render'

const fragmentShader = require('src/visual/shaders/fragment.glsl')
const vertexShader = require('src/visual/shaders/vertex.glsl')

const triangles = 100000;
const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array( triangles * 3 * 3 );
const colors = new Uint8Array( triangles * 3 * 4 );

for ( let i = 0, l = triangles * 3 * 3; i < l; i += 20 ) {
  vertices[ i     ] = Math.random() - 0.5;
  vertices[ i + 1 ] = Math.random() - 0.5;
  vertices[ i + 2 ] = Math.random() - 0.5;
}

for ( let i = 0, l = triangles * 3 * 4; i < l; i += 20 ) {
	colors[ i     ] = Math.random() * 255;
	colors[ i + 1 ] = Math.random() * 255;
	colors[ i + 2 ] = Math.random() * 255;
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

export const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
