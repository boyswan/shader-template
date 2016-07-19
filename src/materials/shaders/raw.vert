precision mediump float;
precision mediump int;

#pragma glslify: noise = require('glsl-noise/simplex/3d');

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional
uniform vec2 pulse;
uniform float time;

attribute vec3 position;
attribute vec3 color;

varying vec3 vPosition;
varying vec3 vColor;

void main()	{

	vColor = color;
	vPosition = position;

	vPosition.x *= sin(position.x * pulse.x * 0.01);
	vPosition.y *= sin(position.y * pulse.y * 0.01);

	gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 6);

}
