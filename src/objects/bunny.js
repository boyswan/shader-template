import bunny from 'bunny'
import Mesh from 'src/objects/common/mesh'
import getWireframe from 'src/helpers/getWireframe'
import material from 'src/materials/move'

export default class Bunny extends Mesh {

  constructor({ input }) {
    super()
    const geometry = getWireframe(bunny)
    this.mesh = new THREE.Mesh(geometry, material );
    this.mesh.translation = geometry.center();
  }

  update({ interval, pulseValue, rotate }) {
    this.position(2, -3)
    this.scale(pulseValue * 0.0005, pulseValue * 0.0005)
    this.uniforms().resolution.value.set(pulseValue, pulseValue);
    this.uniforms().time.value = interval;
  }
}
