import { createBufferGeom, push } from './utils'
const unindex = require('unindex-mesh');
const reindex = require('mesh-reindex');
const buffer = require('three-buffer-vertex-data');

export default (complex, opts = {}) => {

  const geometry = new THREE.BufferGeometry();

  const edge0 = [];
  const edge1 = [];
  const edge2 = [];

  const newComplex = reindex(unindex(complex.positions, complex.cells));
  const positions = newComplex.positions;


  newComplex.cells.forEach(face => {

    const a = positions[face[0]];
    const b = positions[face[1]];
    const c = positions[face[2]];

    // a
    push(edge0, a, 0);
    push(edge1, b, 1);
    push(edge2, c, 1);
    // b
    push(edge0, b, 1);
    push(edge1, c, 1);
    push(edge2, a, 1);
    // c
    push(edge0, c, 2);
    push(edge1, a, 1);
    push(edge2, b, 1);
  });

  buffer.attr(geometry, 'position', positions, 3);
  buffer.attr(geometry, 'edge0', edge0, 4);
  buffer.attr(geometry, 'edge1', edge1, 4);
  buffer.attr(geometry, 'edge2', edge2, 4);

  // const geometry = createBufferGeom({
  //   position: [positions, 3],
  //   edge0: [edge0, 4],
  //   edge1: [edge1, 4],
  //   edge2: [edge2, 4]
  // })


  return geometry;

};
