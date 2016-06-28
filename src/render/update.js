import { frequencyData } from 'src/audio'
import { getFreq, dom, curry } from 'helpers/utils'
import { mesh } from 'src/visual'
import { camera, renderer, scene } from 'src/render'
import Interpol from 'interpol-js'

const mouseMoveX = dom(document, 'mousemove').map(({ clientX }) => clientX)
const mouseMoveY = dom(document, 'mousemove').map(({ clientY }) => clientY)
const mouseDown = dom(document, 'mousedown').map(x => 1)
const mouseUp = dom(document, 'mouseup').map(x => 0)

const mouseMove$ = Rx.Observable.combineLatest( mouseMoveX, mouseMoveY ).startWith([150, 150])
const mouseClick$ = Rx.Observable.merge( mouseDown, mouseUp ).startWith(0)

const requestAnimationFrame$ = Rx.Observable.interval(17)

let value = 0
var t = Interpol.tween()
					.to(360)
					.duration(4000)
					.ease(Interpol.easing.easeInOutBounce)
					// .delay(1000)
					.step(function(val) {
            value = Math.round(val) * 10
					})
					.complete(function() {
						this.reverse();
					})
					.start();

const updateLoop = ({ mouse, rotate, interval }) => {
  console.log(value)

  const { low, mid, high } = getFreq(frequencyData)

  mesh.material.uniforms.mouse.value.set(mouse.x + value, mouse.y)
  mesh.rotation.y = rotate;
  mesh.rotation.x = -rotate;
  mesh.material.uniforms.time.value = interval * 0.1;

  renderer.render(scene, camera)
}

const streams$ = Rx.Observable.combineLatest(
  mouseMove$,
  requestAnimationFrame$,
  (mouse, interval) => ({ mouse, interval })
)


const multiplyMouse = ([ x, y ], inc) => ({ x: x * inc, y: y * inc })

// const divide = curry(x, amount => {
//   return x / amount
// })

streams$
  .map(({ mouse, interval }) => ({
    mouse: multiplyMouse(mouse, 2),
    interval,
    rotate: interval / 360
  }))
  .sample(17, Rx.Scheduler.requestAnimationFrame)
  .subscribe(updateLoop)
