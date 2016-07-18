import Scene from 'src/objects/common/scene'
import * as Objects from 'src/objects'
import * as Input from 'helpers/inputs'
import { pulseValue } from 'helpers/intervals'
import { multiplyMouse, log } from 'helpers/utils'

const FPS = 1000/60

const mouseMove$ = Rx.Observable.combineLatest(Input.mouseMoveX$, Input.mouseMoveY$).startWith([])
const interval$ = Rx.Observable.interval(FPS)
const streams$ = Rx.Observable.combineLatest(
  mouseMove$,
  interval$,
  (mouse, interval) => ({
    mouse: multiplyMouse(mouse, 2),
    interval: interval,
    rotate: interval / 360,
    pulseValue: pulseValue
  })
)

const App = new Scene()
App.add(Objects.test)

streams$
  .do(App.update)
  .sample(FPS, Rx.Scheduler.requestAnimationFrame)
  .subscribe()
