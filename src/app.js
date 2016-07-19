import Scene from 'src/objects/common/scene'
import * as Objects from 'src/objects'
import * as Input from 'helpers/inputs'
import { pulseValue, lowPulse } from 'helpers/intervals'
import { multiplyMouse, addMultiple } from 'helpers/utils'

import { shards, bunny, man, raw } from 'src/objects'
// import Shard from 'src/objects/shards'

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
    pulseValue: pulseValue,
    lowPulse: lowPulse
  })
)


export const App = new Scene()

// App.add(new shards({ input: null }))
// App.add(new bunny({ input: null }))
App.add(new raw({ input: null }))

// addMultiple(App, Objects)

streams$
  .delay(150)
  .do(App.update)
  .sample(FPS, Rx.Scheduler.requestAnimationFrame)
  .subscribe()
