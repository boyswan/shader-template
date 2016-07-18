const OrbitControls = require('three-orbit-controls')(THREE)

class Scene {
  constructor() {
    self = this
    this.items = []
    this.scene = new THREE.Scene()
    this.renderer = this.setRender()
    this.camera = this.setCamera()
    this.controls = new OrbitControls(this.camera)
    document.body.appendChild(this.renderer.domElement)
  }

  setRender() {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.gammaInput = true
    renderer.gammaOutput = true
    renderer.physicallyBasedShading = true
    renderer.maxLights = 10
    return renderer
  }

  setCamera() {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 0, 3)
    return camera
  }

  add(mesh) {
    this.items.push(mesh)
    this.scene.add(mesh.render())
  }

  update(data) {
    self.items.forEach(item => item.update(data))
    self.renderer.render(self.scene, self.camera)
  }
}

export default Scene
