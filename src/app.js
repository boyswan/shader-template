import { multiplyMouse, log } from 'helpers/utils'
import * as Input from 'helpers/inputs'
import updateLoop  from 'src/update'
import { pulseValue } from 'helpers/intervals'

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


streams$
  .sample(FPS, Rx.Scheduler.requestAnimationFrame)
  .subscribe(updateLoop)
