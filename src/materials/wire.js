export default new THREE.ShaderMaterial({
  uniforms: {
    resolution: { type: 'v2', value: new THREE.Vector2(1, 1) },
    time: { type: 'f', value: 0 },
    thickness: { type: 'f', value: 25 },
    repeatSpacing: { type: 'f', value: 7 },
    colorA: { type: 'c', value: new THREE.Color('#dde0ee') },
    colorB: { type: 'c', value: new THREE.Color('#000fff') },
    useAttenuation: { type: 'i', value: true },
    mouse: { type: 'f', value: 0.1 }
  },
  transparent: true,
  depthTest: false,
  depthWrite: false,
  side: THREE.FrontSide,
  extensions: {
    derivatives: true
  },
  wireframe: true,
  vertexShader: require('./shaders/wire.vert'),
  fragmentShader: require('./shaders/wire.frag')
});
