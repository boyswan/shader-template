import bunny from 'bunny'
import Mesh from 'objects/common/mesh'
import getWireframe from 'helpers/getWireframe'
import material from 'materials/wire'
import { App } from 'app'
import { vecToArr, loadJson, clamp } from 'helpers/utils'


export default class Man extends Mesh {

  constructor() {
    super()

    loadJson('man', geo => {
      // this.geometry = getWireframe(vecToArr(geo))
      this.geometry = geo

      const mat = new THREE.MeshLambertMaterial( { color: '#000fff', wireframe: false, shading: THREE.SmoothShading } )

      this.mesh = new THREE.Mesh(this.geometry, mat);
      this.mesh.translation = this.geometry.center();
      App.scene.add(this.mesh)
    })


  }

  update({
    interval,
    leap: {
      translateHand: { x, y, z }
    }
  }) {
    this.rotate(-y, x, 0 )
    // this.uniforms().mouse.value = y * 0.01
  }
}
