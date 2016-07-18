const move = new THREE.RawShaderMaterial({
	uniforms: {
    time: { type: 'f', value: 1.0 },
    mouse: { type: 'vec2', value: new THREE.Vector2(0, 0) }
  },
	vertexShader: require('./shaders/move.vert'),
	fragmentShader: require('./shaders/move.frag'),
	side: THREE.DoubleSide,
	transparent: true
})

export default move
