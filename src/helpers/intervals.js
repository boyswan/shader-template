import Interpol from 'interpol-js'

export let pulseValue = 0

Interpol.tween()
  .from(100)
	.to(200)
	.duration(4000)
	.ease(Interpol.easing.easeInOutCubic)
  .step(val => pulseValue = val * 10)
	.complete(function() { this.reverse() })
	.start();
