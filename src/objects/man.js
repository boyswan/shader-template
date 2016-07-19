import bunny from 'bunny'
import Mesh from 'src/objects/common/mesh'
import getWireframe from 'src/helpers/getWireframe'
import material from 'src/materials/move'
import { App } from 'src/app'

export default class Man extends Mesh {

  constructor({ input }) {
    super()
    new THREE.JSONLoader().load('/public/assets/base.js', (geometry, material) => {
      this.mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(material));
      this.mesh.translation = geometry.center();
      App.scene.add(this.mesh)
    })
  }

  update({ interval, pulseValue, rotate, lowPulse }) {
    this.rotate(0, interval * 0.005 , 0)
    this.scale(0.2)
    // this.uniforms().resolution.value.set(pulseValue * 10, pulseValue * 10);
    // this.uniforms().time.value = interval;
    // this.uniforms().mouse.value = lowPulse * 0.0005
  }
}
