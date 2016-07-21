const OrbitControls = require('three-orbit-controls')(THREE)
import material from 'materials/wire'

export default class Scene {
  constructor() {
    self = this
    this.items = []
    this.renderer = this.getRenderer()
    this.scene = this.getScene()
    this.camera = this.getCamera()
    this.light = this.getLight()
    this.controls = new OrbitControls(this.camera)
    document.body.appendChild(this.renderer.domElement)
  }

  getScene() {
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2( 0x76cedc, 0.001 );
    this.renderer.setClearColor(scene.fog.color);
    return scene
  }

  getRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.gammaInput = true
    renderer.gammaOutput = true
    renderer.physicallyBasedShading = true
    renderer.maxLights = 10
    return renderer
  }

  getCamera() {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 0, 20)
    return camera
  }

  getLight () {
    const light = new THREE.DirectionalLight('#ffffff')
    light.position.set(1, 1, 1)
    this.scene.add(light)
    return light
  }

  add(mesh, show = true) {
    this.items.push(mesh)
    if (show) this.scene.add(mesh.render())
  }

  onWindowResize(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  update(data) {
    self.onWindowResize()
    self.items.forEach(item => item.update(data))
    self.renderer.render(self.scene, self.camera)
  }

}
