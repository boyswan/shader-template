const OrbitControls = require('three-orbit-controls')(THREE)

export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.physicallyBasedShading = true;
renderer.maxLights = 10;

export const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 0, 3 );

export const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.updateProjectionMatrix()
}

export const scene = new THREE.Scene()
// scene.fog = new THREE.FogExp2( '0x76cedc', 0.001 );
// renderer.setClearColor(scene.fog.color);

const light = new THREE.DirectionalLight(0xffffff)
light.position.set( 1, 1, 1 )
scene.add(light)

export const controls = new OrbitControls( camera );


window.addEventListener('resize', onWindowResize, true);
document.body.appendChild(renderer.domElement)
