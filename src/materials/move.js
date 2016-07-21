const hmr = require('helpers/hmr')
const cache = hmr.cache(__filename)
const glslify = require('glslify')
const vertexShader = glslify('./shaders/move.vert')
const fragmentShader = glslify('./shaders/move.frag')

export default () => {
	const material = new THREE.RawShaderMaterial({
		uniforms: {
	    time: { type: 'f', value: 1.0 },
	    mouse: { type: 'vec2', value: new THREE.Vector2(0, 0) }
	  },
		vertexShader,
		fragmentShader,
		side: THREE.DoubleSide,
		transparent: true,
		// wireframe: true,
		// wireframeLinewidth: 5
	})
	hmr.enable(cache, material)
  return material
}

if (module.hot) {
  module.hot.accept(err => {
    if (err) throw errr
  })
  hmr.update(cache, {
    vertexShader, fragmentShader
  })
}
