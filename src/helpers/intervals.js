import Interpol from 'interpol-js'

export let pulseValue = 0
export let lowPulse = 0

Interpol.tween()
  .from(100)
	.to(200)
	.duration(4000)
	.ease(Interpol.easing.easeInOutCubic)
  .step(val => pulseValue = val * 10)
	.complete(function() { this.reverse() })
	.start();

  Interpol.tween()
    .from(50)
  	.to(60)
  	.duration(4000)
  	.ease(Interpol.easing.easeInOutCubic)
    .step(val => lowPulse = val * 10)
  	.complete(function() { this.reverse() })
  	.start();
