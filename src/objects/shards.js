import Mesh from 'src/objects/common/mesh'
import material from 'src/materials/move'
import { createBufferGeom } from 'src/helpers/utils'

export default class Shards extends Mesh {
  constructor({ input }) {
    super()

    // console.log(input)

    this.tri = 1000 * 3 * 3;
    this.colors = new Uint8Array(this.tri);
    this.vertices = new Float32Array(this.tri);

    for ( let i = 0; i < this.tri; i += 1 ) { this.vertices[i] = Math.random() - 0.5 }
    for ( let i = 0; i < this.tri; i += 9) { this.colors[i] = 155 }

    this.mesh = new THREE.Mesh(createBufferGeom({
      position: [this.vertices, 3],
      color: [this.colors, 3, true]
    }), material())

  }

  update({ interval, pulseValue, rotate }) {
    this.rotate(-rotate, rotate)
    this.scale(pulseValue * 0.001, pulseValue * 0.001)
    this.uniforms().mouse.value.set(pulseValue, pulseValue)
    this.uniforms().time.value = interval * 0.1;
  }
}
