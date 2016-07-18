export default new THREE.RawShaderMaterial({
	vertexShader: require('./shaders/basic.vert'),
	fragmentShader: require('./shaders/basic.frag'),
	side: THREE.DoubleSide,
	transparent: true
})
