import { analyser, frequencyData } from 'src/audio'
import updateLoop  from 'src/render/update'
import THREE from 'three'

window.THREE = THREE

const update = () => {
  requestAnimationFrame(update)
  analyser.getByteFrequencyData(frequencyData)
  updateLoop()
}
update()
