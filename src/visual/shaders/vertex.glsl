precision mediump float;
precision mediump int;

uniform mat4 modelViewMatrix; // optional
uniform mat4 projectionMatrix; // optional
uniform vec2 mouse;
uniform float time;

attribute vec3 position;
attribute vec3 color;

varying vec3 vPosition;
varying vec3 vColor;

void main()	{
	vec3 newPos = position;
	// gl_PointSize = 1.00;
	vColor = color;
	vPosition = position;

	newPos.x = sin(position.x * (mouse.x * 0.005));
	newPos.y = sin(position.y * (mouse.y * 0.005));

	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 0.75 );

}
