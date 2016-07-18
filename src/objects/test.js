import { move } from 'src/materials'

class Test {
  constructor() {
    this.tri = 1000 * 3 * 3;
    this.colors = new Uint8Array(this.tri);
    this.vertices = new Float32Array(this.tri);

    for ( let i = 0; i < this.tri; i += 1 ) { this.vertices[i] = Math.random() - 0.5; }
    for ( let i = 0; i < this.tri; i += 9) { this.colors[i] = 155; }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.addAttribute('position', new THREE.BufferAttribute(this.vertices, 3))
    this.geometry.addAttribute('color', new THREE.BufferAttribute(this.colors, 3, true))

    this.mesh = new THREE.Mesh(this.geometry, new THREE.MeshBasicMaterial({color: 0x7777ff}))
  }

  update({ rotate }) {
    // this.mesh.material.uniforms.mouse.value.set(pulseValue, pulseValue)
    this.mesh.rotation.y = rotate;
    this.mesh.rotation.x = -rotate;
    // this.mesh.material.uniforms.time.value = interval * 0.1;
  }

  render() {
    return this.mesh
  }
}

export default new Test()
