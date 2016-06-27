import THREE from 'three'
import { frequencyData } from 'src/audio'
import { getFreq } from 'helpers/utils'
import { mesh } from 'src/visual'
import { camera, renderer, scene } from 'src/render'

let winX = 0, winY = 0

window.addEventListener('mousemove', e => {
  winX = e.clientX
  winY = e.clientY
})

const updateLoop = () => {

  const { low, mid, high } = getFreq(frequencyData)

  var time = performance.now();

  mesh.rotation.y = time * 0.0001;
  mesh.rotation.x = -time * 0.0001;

  mesh.material.uniforms.time.value = time * 0.005;
  mesh.material.uniforms.mouse.value.set(winX, winY)

  renderer.render(scene, camera)
}


export default updateLoop
