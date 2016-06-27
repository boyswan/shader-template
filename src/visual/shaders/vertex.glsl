precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional

attribute vec3 position;
attribute vec3 color;

varying vec3 vPosition;
varying vec3 vColor;

void main()	{

	vPosition = position;
	vColor = color;

	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.75 );

}
