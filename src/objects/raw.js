import Mesh from 'src/objects/common/mesh'
import material from 'src/materials/raw'
import { createBufferGeom } from 'src/helpers/utils'

export default class Raw extends Mesh {
  constructor() {
    super()
    this.geometry = new THREE.BufferGeometry();

    // number of triangles
    this.NUM_TRIANGLES = 100;

    this.positions = new Float32Array( this.NUM_TRIANGLES * 3 * 3 );
    this.normals   = new Float32Array( this.NUM_TRIANGLES * 3 * 3 );
    this.colors    = new Float32Array( this.NUM_TRIANGLES * 3 * 3 );
    this.uvs       = new Float32Array( this.NUM_TRIANGLES * 3 * 2 );

    this.color = new THREE.Color();
    this.scales = 5;
    this.size = 5;

    var x, y, z;

    for ( var i = 0, l = this.NUM_TRIANGLES * 3; i < l; i ++ ) {

        if ( i % 3 === 0 ) {
            x = ( Math.random() - 0.5 ) * this.scales;
            y = ( Math.random() - 0.5 ) * this.scales;
            z = ( Math.random() - 0.5 ) * this.scales;
        } else {
            x = x + this.size * ( Math.random() - 0.5 );
            y = y + this.size * ( Math.random() - 0.5 );
            z = z + this.size * ( Math.random() - 0.5 );
        }

        var index = 3 * i;

        // this.positions
        this.positions[ index     ] = x;
        this.positions[ index + 1 ] = y;
        this.positions[ index + 2 ] = z;

        //this.normals -- we will set this.normals later

        // this.colors
        this.color.setHSL( i / l, 1.0, 0.5 );
        this.colors[ index     ] = this.color.r;
        this.colors[ index + 1 ] = this.color.g;
        this.colors[ index + 2 ] = this.color.b;

        // this.uvs
        this.uvs[ index     ] = Math.random(); // just something...
        this.uvs[ index + 1 ] = Math.random();

    }

    this.geometry.addAttribute( 'position', new THREE.BufferAttribute( this.positions, 3 ) );
    this.geometry.addAttribute( 'normal', new THREE.BufferAttribute( this.normals, 3 ) );
    this.geometry.addAttribute( 'color', new THREE.BufferAttribute( this.colors, 3 ) );
    this.geometry.addAttribute( 'uv', new THREE.BufferAttribute( this.uvs, 2 ) );

    // console.log(this.geometry)
    // this.geometry = createBufferGeom({
    //   position: [this.positions, 3],
    //   normal: [this.normals, 3],
    //   color: [this.colors, 4],
    //   uv: [this.uvs, 2]
    // })

    // optional
    this.geometry.computeBoundingBox();
    this.geometry.computeBoundingSphere();
    this.geometry.computeVertexNormals(); //


    this.mesh = new THREE.Mesh(this.geometry, material())

  }

  update({ interval, lowPulse, rotate }) {
    // this.rotate(-rotate, rotate)
    this.scale(lowPulse * 0.001, lowPulse * 0.001)
    this.uniforms().pulse.value.set(lowPulse, lowPulse)
    this.uniforms().time.value = interval * 0.1;
  }
}
