import { mesh } from 'src/objects'
import { getFreq } from 'helpers/utils'
import { camera, renderer, scene } from 'src/scene'
// import { analyser, frequencyData } from 'src/audio'

export default ({
  mouse: { x, y },
  rotate,
  interval,
  pulseValue
}) => {

  // const { low, mid, high } = getFreq(frequencyData)

  mesh.material.uniforms.mouse.value.set(pulseValue, pulseValue)
  mesh.rotation.y = rotate;
  mesh.rotation.x = -rotate;
  mesh.material.uniforms.time.value = interval * 0.1;

  // Update Render & Audio //
  // analyser.getByteFrequencyData(frequencyData)
  renderer.render(scene, camera)
}
