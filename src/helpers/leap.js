import Interpol from 'interpol-js'
import Leap from 'leapjs'

const TRANSLATION_MULTIPLIER = 0.01
const EMPTY_VEC3 = { x: 0, y: 0, z: 0 }

const controller = new Leap.Controller()


export let translateHand = EMPTY_VEC3


controller.on('deviceFrame', frame => {
  if (frame.hands.length) {
    let [ x, y, z ] = frame._translation
    console.log(frame)
    translateHand = { x: x * TRANSLATION_MULTIPLIER , y: y * TRANSLATION_MULTIPLIER , z: z * TRANSLATION_MULTIPLIER  }
  } else {
    translateHand = EMPTY_VEC3
  }
})




controller.connect();
