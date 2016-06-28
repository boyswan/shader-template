precision mediump float;
precision mediump int;

uniform float time;
uniform vec2 mouse;

varying vec3 vPosition;
varying vec3 vColor;

void main()	{

	vec4 color = vec4( vColor, 0.85 );

	color.b += sin( vPosition.x * 5.0 + time ) * 0.5;

	gl_FragColor = color;

}
