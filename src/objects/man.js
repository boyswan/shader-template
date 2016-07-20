import bunny from 'bunny'
import Mesh from 'src/objects/common/mesh'
import getWireframe from 'src/helpers/getWireframe'
import material from 'src/materials/wire'
import { App } from 'src/app'
import { vecToArr, loadJson } from 'src/helpers/utils'


export default class Man extends Mesh {

  constructor() {
    super()

    loadJson('skull', geo => {
      this.geometry = getWireframe(vecToArr(geo))

      // this.colors = new Float32Array( 100 * 3 * 3);
      // for ( let i = 0; i < this.tri; i += 9) { this.colors[i] = 155 }
      //
      // this.geometry.addAttribute( 'color', new THREE.BufferAttribute(this.colors, 3));


      this.mesh = new THREE.Mesh(this.geometry, material());
      this.mesh.translation = this.geometry.center();
      App.scene.add(this.mesh)
    })

  }

  update({ interval, pulseValue, rotate, lowPulse, mouse: { x, y } }) {
    this.rotate(0, interval * 0.005 , 0)
    this.scale(0.2)
    this.uniforms().mouse.value = (x * y) * 0.000001
  }
}
