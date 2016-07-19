import bunny from 'bunny'
import Mesh from 'src/objects/common/mesh'
import getWireframe from 'src/helpers/getWireframe'
import material from 'src/materials/wire'
import { App } from 'src/app'

export default class Bunny extends Mesh {

  constructor({ input }) {
    super()
    new THREE.JSONLoader().load('/public/assets/base.js', (geometry, materials) => {
      console.log(geometry)
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.translation = geometry.center();
      App.scene.add(this.mesh)
    })
  }

  update({ interval, pulseValue, rotate, mouse: { x, y } }) {
    this.rotate(0, interval * 0.005 , 0)
    this.uniforms().resolution.value.set(pulseValue * 10, pulseValue * 10);
    this.uniforms().time.value = interval;
    this.uniforms().mouse.value = (x * y) * 0.000001
  }
}
